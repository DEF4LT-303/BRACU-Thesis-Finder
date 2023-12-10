const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  applyToPost
} = require('../controllers/postController');
const { verify } = require('../middleware/verifyToken');

router.route('/').get(getAllPosts);
router.route('/:id').get(getPost);
router.route('/').post(verify, createPost);
router.route('/:id').put(verify, updatePost);
router.route('/:id').delete(verify, deletePost);
router.route('/:id/apply').put(verify, applyToPost);

module.exports = router;
