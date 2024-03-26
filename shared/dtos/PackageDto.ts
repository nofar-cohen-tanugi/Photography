import { BaseDto } from "./BaseDto";

type Package = {
    images: string,
    hours: string,
    locations: string,
    styling: string,
    extra: string,
    price: string
}


export class PackageDto extends BaseDto {
    title: string;
    basic: Package;
    premium: Package;
    vip: Package;

    constructor(packageDto: PackageDto) {
        super(packageDto._id)

        this.title = packageDto.title;
        this.basic = packageDto.basic;
        this.premium = packageDto.premium;
        this.vip = packageDto.vip;

        // const mCopy = JSON.parse(JSON.stringify(packageDto));
        // Object.assign(this, mCopy);
    }
}