import express from 'express';
const mongoose = require('mongoose');
require('dotenv').config();
const summaryRoute = require('./routes/summaryRoute');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/api/summary', summaryRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});