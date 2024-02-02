
import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
const app = express();
const detailsRoute = require('./routes/detailsRoute');

mongoose.connect(process.env.MONGODB_URI as string);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use(cors());
app.use('/api/details', detailsRoute);
app.get("/", (req, res) => { res.send("Express on Vercel"); });
const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

module.exports = app;