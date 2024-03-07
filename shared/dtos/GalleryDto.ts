
export type Category =  'family' | 'mitzva' | 'couple' | 'children';

export class GalleryDto {

    category: Category;
    url: string;

    constructor(galleryDto: GalleryDto) {
       this.category = galleryDto.category;
       this.url = galleryDto.url
    }

}