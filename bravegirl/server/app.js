// const express = require('express');
// const session = require('express-session');
// require('dotenv').config();
// const passport = require('passport');

// // create express app
// const app = express();

// // home route
// app.use('/', (req, res) => {
//     res.json({
//         message: 'Welcome to BraveGirl Backend API',
//         Version: '1.0.0',
//         description: 'This is a REST API for BraveGirl',
//         documentation: 'https://documenter.getpostman.com/view/11537359/TzJx7G9E'
//     });
// });

// // use express session middleware
// app.use(session({
//     secret: process.env.SESSION_SECRET, // use an environment variable for the secret
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }));

// // use passport middleware
// app.use(passport.initialize());
// app.use(passport.session());
// // parse Json Bodies
// app.use(express.json());
// // Import route files
// const usersRoutes = require('./routes/v1/users');
// // mount route files
// app.use('/api/v1/users/', usersRoutes);
// module.exports = app;
const express = require('express');
const session = require('express-session');
require('dotenv').config();
const passport = require('passport');

// create express app
const app = express();

// use express session middleware
app.use(session({
    secret: process.env.SESSION_SECRET, // use an environment variable for the secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// use passport middleware
app.use(passport.initialize());
app.use(passport.session());

// parse Json Bodies
app.use(express.json());

// Import route files
const usersRoutes = require('./routes/v1/users');

// mount route files
app.use('/api/v1/users/', usersRoutes);

// home route
app.use('/', (req, res) => {
    res.json({
        message: 'Welcome to BraveGirl Backend API',
        Version: '1.0.0',
        description: 'This is a REST API for BraveGirl',
        documentation: 'https://documenter.getpostman.com/view/11537359/TzJx7G9E'
    });
});

module.exports = app;