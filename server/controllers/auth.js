const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// Register
const register = async (req, res) => {
  console.log("inside")
  const { firstName, lastName, email, password } = req.body;
  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json('Email already exists');
    }
    // Encrypt the password
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.JWT_SECRET
      ).toString();
      
    console.log("uptill now")
      // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: encryptedPassword
    });

    // Save the new user to the database
    const savedUser = await newUser.save();
    const id = savedUser._id
    // Generate an access token
    const accessToken = jwt.sign(
      {id},process.env.JWT_SECRET,
      { expiresIn: '3d' } // Token expires in 3 days
    );

    // Return the user info and access token
    const { password: savedPassword, ...user } = savedUser._doc;
    res.status(200).json({ ...user, accessToken });
  } catch (err) {
    console.log("inside error")
    res.status(500).json(err);
  }
};

//Login
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // !user && res.status(401).json('Wrong email);
    if (!user) {
      return res.status(401).json('Wrong email');
    }

    // decrypt password
    const hashedPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.JWT_SECRET
    );

    const originalPass = hashedPass.toString(CryptoJS.enc.Utf8);
    const inputPass = req.body.password;

    // originalPass !== inputPass && res.status(401).json('Wrong password');
    if (originalPass !== inputPass) {
      return res.status(401).json('Wrong password');
    }
    const id = user._id
    const accessToken = jwt.sign(
      { id }, process.env.JWT_SECRET,
      { expiresIn: '3d' } // Token expires in 3 days
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken }); // return user info and token
  } catch (err) {
    
    res.status(500).json(err);
  }
};

module.exports = { register, login };
