
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { DetailsDto } from '@shared/index';

const Details = new mongoose.Schema({
    summary: {
        title: String,
        description: String
    }
});

const DetailsModel = mongoose.model<DetailsDto['summary']>('Details', Details);

export const getDetailsData = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = await DetailsModel.find({ summary: { $exists: true } });;
        res.send(data);

        res.json(data);
        next();
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default { getDetailsData };