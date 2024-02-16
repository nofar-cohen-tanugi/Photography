
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { DetailsDto } from '@shared/dtos/DetailsDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';

const Details = new mongoose.Schema({
    summary: {
        title: String,
        description: String
    }
});

const DetailsModel = mongoose.model<DetailsDto>('Details', Details);

export const getDetailsData = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = (await DetailsModel.find({ "summary": { "$exists": true } }));
        const summary: BaseResponse<DetailsDto> = {
            data: data?.[0] as unknown as DetailsDto,
            message: "success to get summary"
        }
        res.json(summary);
        next();
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default { getDetailsData };