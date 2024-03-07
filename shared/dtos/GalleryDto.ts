
export type Category =  'family' | 'mitzva' | 'couple' | 'children';

export class GalleryDto {

    category: Category;
    urlId: string;

    constructor(galleryDto: GalleryDto) {
       this.category = galleryDto.category;
       this.urlId = galleryDto.urlId
    }

}