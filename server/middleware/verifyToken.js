const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('inside');
  if (authHeader) {
    
    const token = authHeader.split(' ')[1]; // Extract the token after "Bearer "
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json('Token is not valid!');
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('You are not authenticated!');
  }
};

const verifyTokenAuth = (req, res, next) => {
  verify(req, res, () => {
    // Allow access for admins without checking the id
    if (req.user?.role === 'admin') {
      return next();
    }

    // For other requests (e.g., POST) or GET requests with a specific id,
    // verify the user's id against the resource id (if applicable)
    if (req.user.id === req.params.id) {
      return next();
    }

    // If none of the above conditions are met, user is not allowed
    res.status(403).json('You are not allowed!');
  });
};

const verifyTokenAdmin = (req, res, next) => {
  verify(req, res, () => {
    if (req.user?.role === 'admin') {
      next();
    } else {
      res.status(403).json('You are not allowed!');
    }
  });
};

module.exports = { verify, verifyTokenAuth, verifyTokenAdmin };
