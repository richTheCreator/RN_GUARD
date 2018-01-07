require('dotenv').load();
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

const User = require('../models/user');

const fbOptions = {
  clientID: process.env.FB_APP_ID,
  clientSecret: process.env.FB_SECRET,
  passReqToCallback: true,
};

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});


const verify = function (req, accessToken, refreshToken, profile, done) {
  // USERS FB PROFILE INFO
  const parsedUser = {
    fullname: `${profile.name.givenName} ${profile.name.familyName}`,
    facebookID: profile.id.toString(),
    token: accessToken,
    avatar: profile.photos[0].value,
  };

// FIND USER OR CREATE
  User.findOne({
    facebookID: profile.id,
  }, (err, user) => {
    console.log('USER_INIT-------------', user);

    if (user) {
      // FOUND USER
      console.log('USER_FOUND-------------', user);
      user.alreadyCreated = true;
      return done(err, user);
    }

    // CREATE NEW USER
    if (!user && req.body.fromSignUp) {
      console.log('USER_CREATED', user);
      const createUser = new User(parsedUser);
      createUser.save((err) => {
        if (err) console.log(err);
        return done(err, createUser);
      });
    } else {
      console.log('ERR-------', err);
      return done(err);
    }
  });
};

const fbStrategy = new FacebookTokenStrategy(fbOptions, verify);

passport.use(fbStrategy);
