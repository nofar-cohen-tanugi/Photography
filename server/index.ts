// import express from 'express';
// import mongoose from 'mongoose';
// const summaryRoute = require('../routes/summaryRoute');

// const app = express();
// const port = 5000;

// // mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// // const connection = mongoose.connection;

// // connection.once('open', () => {
// //     console.log('MongoDB database connection established successfully');
// // });
// app.use('/api/summary', summaryRoute);
// app.get("/", (req, res) => { res.send("Express on Vercel"); });

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

import express from "express";
const app = express();
app.get("/", (req, res) => { res.send("Express on Vercel"); });
const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

module.exports = app;