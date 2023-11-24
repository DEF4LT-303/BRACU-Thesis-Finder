const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require("./routes/chatRoutes")
const messageRoutes = require("./routes/messageRoutes")
const connectDB = require('./config/db')
const colors = require('colors')


connectDB()
app.use(cors());

dotenv.config();
app.get('/', (req, res) => {
  res.send("API is running")
})
// mongoose
//   .connect(process.env.DB_CONNECT)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)

const PORT = process.env.PORT || 5000 

const server = app.listen(PORT, console.log(`server Started on PORT ${PORT}`.yellow.bold))