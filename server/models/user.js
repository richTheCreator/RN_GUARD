const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const Schema = mongoose.Schema;

// const validateEmail = (email) => {
//   const re = /\S+@\S+\.\S+/;
//   return re.test(email);
// };

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
  },
  username: {
    type: String,
    unique: true,
  },
  profile_img: {
    type: String,
    default: null,
  },
  fullname: {
    type: String,
    default: null,
  },
  weight: {
    type: Number,
  },
  age: {
    type: Number,
  },
  facebookID: {
    type: String,
    unique: true,
  },
  avatar: {
    type: String,
  },
  token: {
    type: String,
  },
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('user', userSchema);
