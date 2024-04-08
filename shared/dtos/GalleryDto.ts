import { BaseDto } from "./BaseDto";

export type Category = 'family' | 'mitzva' | 'couple' | 'children';

export class GalleryDto extends BaseDto {

    urlIds: string[];
    category: Category;

    constructor(galleryDto: GalleryDto) {
        super(galleryDto._id)
        this.category = galleryDto.category;
        this.urlIds = galleryDto.urlIds;
    }

}