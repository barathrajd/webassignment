const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const app = express();
const userRoute = require('./routes/user');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
connectDB();

// Import routes

app.use('/users', userRoute);

app.get('/', (req, res) => {
  res.send(' I am listenting');
});

app.listen(3000, (req, res) => {
  console.log('Port 3000');
});
