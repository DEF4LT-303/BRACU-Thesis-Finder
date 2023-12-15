const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.use(cors());

dotenv.config();
app.get('/', (req, res) => {
  res.send('API is running');
});
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/posts', postRoutes);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);

const io = require('socket.io')(server, {
  //this means the amount of time it will wait while being inactive
  // the below 60000 denotes that it is gonna wait 60secs before it goes off
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
})

io.on("connection", (socket) => {
  console.log("connected to socket.io");
  //creates a new room with the id of the user data
  socket.on('setup', (userData) => {
    socket.join(userData._id)//this has created a room for that particular user when he logs in
    // console.log(userData._id)
    socket.emit("connected")
  })
  //when we will click on any chat,then a room will be created for that particular chat
  //taking the particular chat._id as parameter
  socket.on('join chat', (room) => {
    socket.join(room)
    console.log('user joined room: ' + room)
  })

  socket.on('typing', (room) => socket.in(room).emit("typing"))
  socket.on('stop typing', (room) => socket.in(room).emit("stop typing"))

  socket.on('new message', (newMessageReceived) => {
    var chat = newMessageReceived.chat

    if (!chat.users) return console.log('chat.users not defined')

    chat.users.forEach(user => {
      if (user._id === newMessageReceived.sender._id) return
      //sending to the following userId in a realtime way
      socket.in(user._id).emit("message received", newMessageReceived)// gonna receive this in the frontend
    })

  })

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  })
})
