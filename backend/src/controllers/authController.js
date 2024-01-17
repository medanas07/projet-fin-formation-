const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = require('../models/users');

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, mobile,  password } = req.body;

    // Check if user with the provided email already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new user
    const newUser = new users(req.body);

    // Save the user to the database
    await newUser.save();

    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
      console.error('Duplicate key error:', error);
      return res.status(400).json({ error: 'Email already exists' });
    }

    console.error('Signup error:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user with the provided email exists
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the provided password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    // Send the token in the response
    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { signup, login };
