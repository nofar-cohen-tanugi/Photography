import { BaseDto } from "./BaseDto";

export type Category = 'family' | 'mitzva' | 'couple' | 'children';

export class GalleryDto extends BaseDto {

    objects: {
        urlId: string,
        category: Category
    }[];
    count: number;



    constructor(galleryDto: GalleryDto) {
        super(galleryDto._id)
        this.objects = galleryDto.objects;
        this.count = galleryDto.count;
    }

}