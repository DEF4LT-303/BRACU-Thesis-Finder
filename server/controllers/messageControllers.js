const asyncHandler = require("express-async-handler")
const Message = require("../models/messageModel");
const Chat = require("../models/chatModel");
const users = require("../models/User");

const sendMessage = asyncHandler(async(req,res)=>{
    const{content,chatId} = req.body

    if(!content||!chatId){
        console.log("Invalid data passed into request")
        return res.sendStatus(400)
    }
    let newMessage ={
        sender:req.user._id,
        content:content,
        chat:chatId

    }

    try {
        var message = await Message.create(newMessage);
        message = await message.populate("sender", "firstname lastName")
        message = await message.populate("chat")
        message = await users.populate(message, {
            path: "chat.users",
            select: "firstName lastName email",
        });

        await Chat.findByIdAndUpdate(req.body.chatId,{
            latestMessage:message
        })

        res.json(message)
        //eddited
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})

const allMessages = asyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "firstName lastName email")
            .populate("chat");
        res.json(messages);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

module.exports = { sendMessage, allMessages }