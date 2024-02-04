export class DetailsDto {

    summary: {
        title: string,
        description: string
    };
    contact: {
        phoneNumber: string,
        email: string
    }

    constructor(detailsDto: DetailsDto) {
        //const mCopy = JSON.parse(JSON.stringify(detailsDto));
        //Object.assign(this, mCopy);
        this.summary = detailsDto.summary || { title: '', description: '' };
        this.contact = detailsDto.contact || { phoneNumber: '', email: '' };
    }

}