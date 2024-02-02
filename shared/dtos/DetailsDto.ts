export class DetailsDto {

    summary: {
        title: String,
        description: String
    };
    contact: {
        phoneNumber: string,
        email: string
    }

    constructor(detailsDto: DetailsDto) {
        const mCopy = JSON.parse(JSON.stringify(detailsDto));
        Object.assign(this, mCopy);
    }

}