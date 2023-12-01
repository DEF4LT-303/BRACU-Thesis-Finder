const express = require('express');
const { verify, verifyTokenAuth } = require('../middleware/verifyToken');
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup
} = require('../controllers/chatControllers');

const router = express.Router();

router.route('/').post(verify, accessChat);
router.route('/').get(verify, fetchChats);
router.route('/group').post(verify, createGroupChat);
router.route('/rename').put(verify, renameGroup);
router.route('/groupadd').put(verify, addToGroup);
router.route('/groupremove').put(verify, removeFromGroup);

module.exports = router;
