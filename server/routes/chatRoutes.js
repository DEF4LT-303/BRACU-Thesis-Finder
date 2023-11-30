const express = require('express');
const { verifyTokenAuth } = require('../middleware/verifyToken');
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup
} = require('../controllers/chatControllers');

const router = express.Router();

router.route('/').post(verifyTokenAuth, accessChat);
router.route('/').get(verifyTokenAuth, fetchChats);
router.route('/group').post(verifyTokenAuth, createGroupChat);
router.route('/rename').put(verifyTokenAuth, renameGroup);
router.route('/groupadd').put(verifyTokenAuth, addToGroup);
router.route('/groupremove').put(verifyTokenAuth, removeFromGroup);

module.exports = router;
