const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { validationResult, body } = require('express-validator'); /*middleware library to handle validation*/
const bcrypt = require('bcrypt'); /*middleware library to handle password hashing*/
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();


// create user with validation and password Encryption
router.post('/register', [
    body('username').isString(), 
    body('email').isEmail(),
    body('password').isLength({ min: 6}),
], async (req, res) => {
    //Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, email, password } = req.body;
      
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
      
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        // hash passwords
        const hashedpassword = await bcrypt.hash(password, 10);

        // create user in the database
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedpassword,
            },
        });
        
        // Add links to the response
      const links = {
            login: '/api/v1/users/login',
        };
      
        // Send response
      res.status(200).json({user, links});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create a new user' });
    }
});


// LOGIN USER
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  async (email, password, done) => {
    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user, { message: 'Logged in successfully' });
  }
));

// serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  prisma.user.findUnique({ where: { id } })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  const user = req.user;
  const links = {
    register: '/api/v1/users/update',
  };
  res.json({ user, links });
});

// change username 
router.put('/change-username', async (req, res) => {
  const { username } = req.body;
  const userId = req.user.id;

  try {
    // update username in the database
    console.log('Updating username for user with ID:', userId);
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
      },
    });
   console.log('Updated username for user:', user);

    // Add links to the response
    const links = {
      password_change: '/api/v1/users/change-password',
    };
    // Send response
    res.status(200).json({ user, links });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update username' });
  }
});


// change password
router.put('/change-password', async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.user.id;

  try {
    // find user in the database
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    // Check password
    const validPassword = await bcrypt.compare(oldPassword, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    // hash passwords
    const hashedpassword = await bcrypt.hash(newPassword, 10);

    // update password in the database
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedpassword,
      },
    });

    // Add links to the response
    const links = {
      username_change: '/api/v1/users/change-username',
    };
    // Send response
    res.status(200).json({ message: 'Password changed successfully', links });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update password' });
  }
});

// LOGOUT USER
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      // handle error
      console.error(err);
      return res.status(500).json({ error: 'Failed to log out' });
    }
    // if logout succeeded
    res.json({ message: 'Logged out successfully' });
  });
});

// Get Users 
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    // condition for no users
    if (users.length === 0) {
      res.status(404).json({ error: 'No users found' });
    } else {
      res.json(users);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// Get a specific user via Id
router.get('/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve the user' });
  }
});

// Google authentication route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Twitter authentication route
router.get('/auth/twitter',
  passport.authenticate('twitter'));

router.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;