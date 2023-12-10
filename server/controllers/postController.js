const Post = require('../models/Post');
const User = require('../models/User');

// Create a new post
const createPost = async (req, res) => {
  try {
    const userId = req.user.id;

    const author = await User.findById(userId);

    if (!author) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newPost = new Post({
      ...req.body,
      author: author
    });

    const savedPost = await newPost.save();

    await User.findByIdAndUpdate(userId, {
      $addToSet: { posts: savedPost._id }
    }).exec();

    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', '-password')
      .populate('applied', '-password')
      .exec();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a post by ID
const getPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findById(postId)
      .populate('author', '-password')
      .populate('applied', '-password')
      .exec();

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a post by ID
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a post by ID
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const authorId = post.author;

    await Post.findByIdAndDelete(postId);

    await User.findByIdAndUpdate(authorId, {
      $pull: { posts: postId }
    }).exec();

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
};

const applyToPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (userId === post.author.toString()) {
      return res
        .status(400)
        .json({ error: 'You cannot apply to your own post' });
    }

    // Check if the user has already applied
    const appliedIndex = post.applied.findIndex(
      (appliedUser) => appliedUser._id.toString() === userId
    );

    if (appliedIndex !== -1) {
      // User is already applied, so remove from applied array (leave)
      post.applied.splice(appliedIndex, 1);
      await post.save();
      return res.json({ message: 'Successfully left the post' });
    }

    // User is not applied, so add to applied array (apply)
    const user = await User.findById(userId);
    post.applied.push(user);
    await post.save();

    return res.json({ message: 'Successfully applied to the post' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  applyToPost
};
