const express = require('express');
const { verifyTokenAuth } = require('../middleware/verifyToken');
const {
  sendMessage,
  allMessages
} = require('../controllers/messageControllers');

const router = express.Router();

router.route('/').post(verifyTokenAuth, sendMessage); //for sending the messages
router.route('/:chatId').get(verifyTokenAuth, allMessages); // fetch all the message for one single chat

module.exports = router;
