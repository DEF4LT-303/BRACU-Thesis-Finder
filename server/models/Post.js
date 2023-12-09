const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },

    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
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
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Users'
        }
      ],
      default: []
    }
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
