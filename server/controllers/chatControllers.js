const asyncHandler = require('express-async-handler');
const Chat = require('../models/chatModel');
const User = require('../models/User');

const accessChat = asyncHandler(async (req, res) => {
  //going to check if a chat with a user id exists then return it
  // and if it doesn't exist, then create a chat with this userId
  console.log('got the req');
  const { userId } = req.body;

  if (!userId) {
    console.log('UserId param not sent with request');
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } }, //should be equal to the current user that is logged in and should be equal to the userid that we are sent
      { users: { $elemMatch: { $eq: userId } } }
    ]
  })
    .populate('users', '-password')
    .populate('latestMessage');

  isChat = await User.populate(isChat, {
    path: 'latestMessage.sender',
    select: 'name pic email'
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: 'sender',
      isGroupChat: false,
      users: [req.user._id, userId]
    };
    try {
      const createdChat = await Chat.create(chatData);

      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        'users',
        '-password'
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

const fetchChats = asyncHandler(async (req, res) => {
  try {
    const result = await Chat.find({
      users: { $elemMatch: { $eq: req.user.id } }
    })
      .populate('users', '-password')
      .populate('latestMessage')
      .populate('groupAdmin')
      .sort({ updateAt: -1 });

    const finalResult = await User.populate(result, {
      path: 'latestMessage.sender',
      select: 'name pic email'
    });
    res.send(finalResult);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "please fill all the fields" })
  }

  let users = JSON.parse(req.body.users)

  if (users.length < 2) {
    return res.status(400).send("need more than 2 users")
  }

  console.log(users);

  const userId = req.user.id;
  console.log(userId);
  const userInfo = await User.findById(userId) 

  console.log(userInfo);
  users.push(userInfo)
  
  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: userInfo
    });

    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate('users', '-password')
      .populate('groupAdmin', '-password');

    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const renameGroup = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { chatName },
    { new: true }
  )
    .populate('users', '-password')
    .populate('groupAdmin', '-password');

  if (!updatedChat) {
    res.status(404);
    throw new Error('chat not found');
  } else {
    res.json(updatedChat);
  }
});

const addToGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId }
    },
    { new: true }
  )
    .populate('users', '-password')
    .populate('groupAdmin', '-password');
  if (!added) {
    res.status(404);
    throw new Error('failed to add');
  } else {
    res.json(added);
  }
});

const removeFromGroup = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId }
    },
    { new: true }
  )
    .populate('users', '-password')
    .populate('groupAdmin', '-password');
  if (!removed) {
    res.status(404);
    throw new Error('failed to remove');
  } else {
    res.json(removed);
  }
});

module.exports = {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup
};
