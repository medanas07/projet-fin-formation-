const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { connect } = require('./src/config/db');

const app = express();
app.use(express.json())

// Middleware

app.use(cors());

// Connect to MongoDB
connect();

// Define routes
console.log('Before importing userRoutes');
const userRoutes = require('./src/routes/userRoute');
console.log('After importing userRoutes');



app.use('/api/users', userRoutes);

const authController = require('./src/controllers/authController');
app.post('/signup', authController.signup);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set a static folder
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} 

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
