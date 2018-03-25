import { ImageBlobBase } from './image-blob.base.model';
import { BlobType } from './blob.type';

export class BlobModel extends ImageBlobBase {

    constructor(private blob: BlobType) {
        super(blob.size, blob.type);
    }

    getData(): BlobType {
        return {
            ...this.blob,
            lastModified: this.blob.size,
            lastModifiedDate: this.blob.lastModifiedDate,
            name: this.blob.name,
            preview: this.blob.preview,
            size: this.blob.size,
            type: this.blob.type
        };
    }
}
