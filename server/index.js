const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use(express.json());
// app.use('/api/users', userRoute);
// app.use('/api/auth', authRoute);
// app.use('/api/forums', forumRoute);
// app.use('/api/replies', replyRoute);
// app.use('/api/feedback', feedbackRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);