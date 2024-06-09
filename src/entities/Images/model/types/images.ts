export interface ImagesInterface {
    id: string;
    urls: Urls;
}

export interface Urls {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
}
