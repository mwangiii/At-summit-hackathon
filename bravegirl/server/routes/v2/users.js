// const express = require('express');
const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const TwitterStrategy = require('passport-twitter').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const { validationResult, body } = require('express-validator'); /*middleware library to handle validation*/
const bcrypt = require('bcrypt'); /*middleware library to handle password hashing*/
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// // Authentication with Google
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     // To-do create user in your database
//     // ...
//   }
// ));

// // Authentication with X (formerly Twitter)
// passport.use(new TwitterStrategy({
//     consumerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://www.example.com/auth/twitter/callback"
//   },
//   function(token, tokenSecret, profile, cb) {
//     // To-do create user in your database
//     // ...
//   }
// ));

// Exisiting user registration

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
        res.status(201).json({user, links});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create a new user' });
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

    return done(null, user);
  }
));

router.post('/login', passport.authenticate('local'), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  const user = req.user;
  const links = {
    register: '/api/v1/users/register',
  };
  res.json({ user, links });
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