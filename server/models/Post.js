const mongoose = require('mongoose');

const postModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },

    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
    },

    author: {
        type: String,
        // ref: 'users', // Assuming your user model is named 'User'
        required: [true, 'Author is required'],
    },

    tags: {
        type: [String],
        default: [],
    },
},
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', postModel);

module.exports = Post;