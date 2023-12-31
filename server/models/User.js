const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'User must provide an email'],
    unique: true,
    lowercase: true,
    validate: {
      validator: async function (email) {
        const user = await this.constructor.findOne({ email });
        return !user;
      },
      message: 'Email address is already taken'
    }
  },

  firstName: {
    type: String,
    default: ''
  },

  lastName: {
    type: String,
    default: ''
  },

  about: {
    type: String,
    default: ''
  },

  githubLink: {
    type: String,
    default: ''
  },

  linkedInLink: {
    type: String,
    default: ''
  },

  technicalSkills: {
    type: Array,
    default: []
  },

  photo: {
    type: String,
    default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
  },

  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8
  },

  role: {
    type: String,
    enum: ['student', 'faculty', 'admin'],
    default: 'student'
  },

  posts: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    default: []
  },

  favourites: {
    type: Array,
    default: []
  },

  materialCount: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
