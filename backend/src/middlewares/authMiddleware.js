// authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    // Get the token from the request headers
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw new Error('No token provided');
    }

    // Verify the token using your secret key
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!decodedToken) {
      throw new Error('Invalid token');
    }

    // Attach user data to the request for further processing
    req.userData = { userId: decodedToken.userId };

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Authentication failed:', error.message);
    res.status(401).json({ error: 'Authentication failed', message: error.message });
  }
};

module.exports = { authenticate };
