const User = require('../models/user');

// const resHandler = (res, resStatus, message, data) =>
// res.status(resStatus).json({ error: false, message, data });
//
// const errHandler = (res, resStatus, message, data) =>
//   res.status(resStatus).json({ error: true, message, data });

/**
************************************************
SIGN UP
************************************************
**/
exports.signup = (req, res) => {
  console.log('Signed Up with Facebook!');

  const user = {
    avatar: req.user.avatar,
    fullname: req.user.fullname,
    alreadyCreated: req.user.alreadyCreated,
  };
  if (user) {
    res.json({ user });
  } else { res.send({ error: 'no user!' }); }
};

/**
************************************************
SIGN IN
************************************************
**/
exports.signin = (req, res) => {
  console.log('Signed In------', req.user);
  const user = {
    avatar: req.user.avatar,
    fullname: req.user.fullname,
  };
  const update = { facebookID: req.user.facebookID };
  if (req.user) {
    // NEED TO UPDATE FB_TOKEN IN DB AS WELL
    User.findOneAndUpdate({ _id: req.user._id }, update)
      .then(() => res.send({ user }))
      .catch(err => res.send({ error: 'fn signin - findOneAndUpdate' }));
  } else { res.send({ error: 'no user!' }); }
};

/**
************************************************
SUPER SECRET!
************************************************
**/
exports.secureRoute = (req, res) => {
  console.log('Secure Route!');
  const message = 'SECURE API ROUTE CALLED!';
  if (req.user) {
    res.json({ message });
  } else { res.send({ error: 'no user!' }); }
};
