const mongoose = require('mongoose');

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    // a group chat is gonna have atleast 2 users or n users at max
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
      }
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
    }
  },
  {
    timestamps: true
  }
);

const Chat = mongoose.model('Chat', chatModel);

module.exports = Chat;
