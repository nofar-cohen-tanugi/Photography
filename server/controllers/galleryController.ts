
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { GalleryDto } from '@shared/dtos/GalleryDto';
import { BaseResponse } from '@shared/dtos/BaseResponse';

const Gallery = new mongoose.Schema({
    category: String,
    urlIds: []
});

const galleryModel = mongoose.model<GalleryDto>('Gallery', Gallery);

export const getGallriesData = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = await galleryModel.find().limit(6);
        const gallery: BaseResponse<GalleryDto[]> = {
            data: data,
            message: "success to get gallery"
        }
        res.json(gallery);
        next();
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const getGalleryByNameData = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const categoryName = req.params.name;
        const data = await galleryModel.find({ category: categoryName });
        const gallery: BaseResponse<GalleryDto[]> = {
            data: data,
            message: "success to get gallery"
        }
        res.json(gallery);
        next();
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default { getGallriesData, getGalleryByNameData };