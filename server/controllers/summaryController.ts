
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const Summary = new mongoose.Schema({
    title: String,
    description: String,
});

const SampleModel = mongoose.model('Sample', Summary);

export const getSummaryData = async (req: Request, res: Response, nest: NextFunction) => {
    try {
        const data = await SampleModel.find();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default { getSummaryData };