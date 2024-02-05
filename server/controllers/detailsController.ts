
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { DetailsDto } from '@shared/index';

const Details = new mongoose.Schema({
    summary: {
        title: String,
        description: String
    }
});

const DetailsModel = mongoose.model('Details', Details);

export const getDetailsData = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = await DetailsModel.find();
        if (data?.length === 0) {
            res.json({ message: 'No details found 44' });
        } else {
            res.json(data);
        }
        next();
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default { getDetailsData };