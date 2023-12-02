const mongoose = require('mongoose');

const postModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },

    desc: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },

    author: {
      type: String,
      ref: 'User', // Assuming your user model is named 'User'
      required: [true, 'Author is required']
    },

    tags: {
      type: Array,
      default: []
    },

    phase: {
      type: Number,
      default: 1
    },

    isPublic: {
      type: Boolean,
      default: true
    },

    applied: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model('Post', postModel);

module.exports = Post;
