const express = require('express');
const connect = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

//User routes
app.use(userRoutes);

//MongoDB connection
connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running!'));