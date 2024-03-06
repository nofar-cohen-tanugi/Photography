type Package = {
    images: string,
    hours: string,
    locations: string,
    styling: string,
    extra: string,
    price: string
}


export class PackageDto {
    title: string;
    basic: Package;
    premium: Package;
    vip: Package;

    constructor(packageDto: PackageDto) {
        const mCopy = JSON.parse(JSON.stringify(packageDto));
        Object.assign(this, mCopy);
    }
}