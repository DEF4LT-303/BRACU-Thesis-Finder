// TODO - Add create post controller
// TODO - Add getAll post controller
// TODO - Add get post controller
// TODO - Add update post controller
// TODO - Add delete post controller


const Post = require('../models/Post'); // Import the Post model

// Create a new post
exports.createPost = async(req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get all posts
exports.getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a post by ID
exports.getPost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update a post by ID
exports.updatePost = async(req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete a post by ID
exports.deletePost = async(req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(204).json('Post deleted successfully');
    } catch (err) {
        res.status(500).json(err);
    }
};