const jwt = require('jsonwebtoken');
const User=require('../models/User.model')
require('dotenv').config();
exports.middleware = async (req, res, next) => {
  let token;

  // Retrieve the token from the cookie
  if (req.body.token) {
      token = req.body.token;

      try {
          // Verify the token
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          // Attach the user object to the request, excluding the password field
          req.user = await User.findById(decoded.id).select('-password');

          // Proceed to the next middleware
          next();
      } catch (error) {
          return res.status(401).json({
              success: false,
              message: 'Not authorized, token failed',
          });
      }
  } else {
      return res.status(401).json({
          success: false,
          message: 'Not authorized, no token',
      });
  }
};