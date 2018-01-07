const passport = require('passport');
// header with the JWT token for that user.
const requireFB = passport.authenticate('facebook-token');
const AuthController = require('../controller/auth');
const passportService = require('./passport');

const router = require('express').Router();

// ONBOARDING ROUTES
// ---------------------------------------------------
// router.route('/signup')
//   .post(AuthController.signup);

router.route('/signup')
  .post([requireFB, AuthController.signup]);

router.route('/signin')
  .post([requireFB, AuthController.signin]);

router.route('/secure')
  .get([requireFB, AuthController.secureRoute]);


module.exports = router;
