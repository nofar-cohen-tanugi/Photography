
import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const summaryRoute = require('./routes/summaryRoute');

mongoose.connect(process.env.MONGODB_URI as string);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});


app.use('/api/summary', summaryRoute);
app.get("/", (req, res) => { res.send("Express on Vercel"); });
const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

module.exports = app;