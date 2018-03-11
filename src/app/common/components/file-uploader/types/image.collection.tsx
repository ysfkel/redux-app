import { ImageBlobBase } from "./image-blob.base.model";

export class ImageCollection extends ImageBlobBase{

    constructor(private size: number, private type: string ) {
        super(size, type);
    }

}
