const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Invalid email address',
    },
  },
  mobile: {
    type: String,
    
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model('users', userSchema);
