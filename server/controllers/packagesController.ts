
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { PackageDto } from '@shared/dtos/PackageDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';

const Packages = new mongoose.Schema({
    type: String,
    basic: Object,
    premium: Object,
    vip: Object,
});

const packagesModel = mongoose.model<PackageDto>('Packages', Packages);

export const getPackagesData = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = (await packagesModel.find());
        const packages: BaseResponse<PackageDto[]> = {
            data: data,
            message: "success to get packages"
        }
        res.json(packages);
        next();
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default { getPackagesData };