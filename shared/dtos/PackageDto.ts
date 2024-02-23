type Package = {
    images: number,
    hours: number,
    locations: number,
    styling: string,
    extra: string,
    price: number
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