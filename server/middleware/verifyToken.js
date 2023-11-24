const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const user = require("../models/User");

const verify = AsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]//taking the token by split method
      // token will look like, Bearer dadsadadasd
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // defining a user variable inside the request object
      req.user = await user.findById(decoded.id).select("-password")
      //after all the operations are done the next is basically moving on with the api hit function in the userRoutes
      next()

    } catch (error) {
      res.status(401)
      throw new Error("Not authorized, token failed")
    }
  }

  else if (!token) {
    res.status(401)
    throw new Error("Not authorized to perform the action")
  }
})

const verifyTokenAuth = (req, res, next) => {
  verify(req, res, () => {
    // Allow access for admins without checking the id
    if (req.user?.role === 'admin') {
      return next();
    }

    // For GET requests without a specific id, allow access
    if (
      req.method === 'GET' ||
      req.method === 'POST' ||
      req.method === 'PUT' ||
      req.method === 'DELETE'
    ) {
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