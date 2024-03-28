
import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();
const app = express();
const detailsRoute = require('./routes/detailsRoute');
const packagesRoute = require('./routes/packagesRoute');
const galleryRoute = require('./routes/GalleryRoute');

// mongoose.connect(process.env.MONGODB_URI as string);
// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('MongoDB database connection established successfully');
// });

app.use(cors());
app.use('/api/details', detailsRoute);
app.use('/api/packages', packagesRoute);
app.use('/api/gallery', galleryRoute);

app.get('/', (req, res) => { res.send("Express on Vercel"); });

const PORT = parseInt(process.env.PORT ?? '80');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});