const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');

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

const server = app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);

const io = require('socket.io')(server,{
  //this means the amount of time it will wait while being inactive
  // the below 60000 denotes that it is gonna wait 60secs before it goes off
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
})
