import { BaseDto } from "./BaseDto";

export class DetailsDto extends BaseDto {

    summary: {
        title: string,
        description: string | TrustedHTML;
    };
    contact: {
        phoneNumber: string,
        email: string
    }

    constructor(detailsDto: DetailsDto) {
        //const mCopy = JSON.parse(JSON.stringify(detailsDto));
        //Object.assign(this, mCopy);
        super(detailsDto._id)
        this.summary = detailsDto.summary || { title: '', description: '' };
        this.contact = detailsDto.contact || { phoneNumber: '', email: '' };
    }
}