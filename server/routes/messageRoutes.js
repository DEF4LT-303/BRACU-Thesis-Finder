const express = require('express');
const { verify } = require('../middleware/verifyToken');
const {
  sendMessage,
  allMessages
} = require('../controllers/messageControllers');

const router = express.Router();

router.route('/').post(verify, sendMessage); //for sending the messages
router.route('/:chatId').get(verify, allMessages); // fetch all the message for one single chat

module.exports = router;
