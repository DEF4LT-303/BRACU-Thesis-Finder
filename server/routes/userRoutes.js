const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const { verifyTokenAuth, verify } = require('../middleware/verifyToken');

router.route('/').get(getUsers);
router.route('/:id').get(getUser);
router.route('/:id').put(verifyTokenAuth, updateUser);
router.route('/:id').delete(verifyTokenAuth, deleteUser);

module.exports = router;
