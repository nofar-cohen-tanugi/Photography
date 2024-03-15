
export type Category = 'family' | 'mitzva' | 'couple' | 'children';

export class GalleryDto {

    objects: {
        urlId: string,
        category: Category
    }[];
    count: number;



    constructor(galleryDto: GalleryDto) {
        this.objects = galleryDto.objects;
        this.count = galleryDto.count
    }

}