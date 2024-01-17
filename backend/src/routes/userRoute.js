const express = require('express');
const router = express.Router();
const User = require('../models/users');
const { signup } = require('../controllers/authController');

router.get('/', (req, res) => {
  try {
    const userData = {
      id: 1,
      username: 'medanas07',
      email: 'medanas.missoum@gmail.com',
    };

    res.status(200).json(userData);
  } catch (error) {
    console.error('Error in user route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/register', signup);

module.exports = router;