import { BlobType } from './blob.type';

export class BlobCollection extends Array {
    private _blobs: Array<BlobType> = [];
    constructor(private blobList: BlobType[]) {
        super();
        this.Blobs = blobList;
    }

    private listExists = () => {
        return this.blobList && this.blobList.length > 0;
    }

    public get Blobs(): Array<BlobType> {
       return this._blobs;
    }

    public set Blobs (value: Array<BlobType>) {
        if (this.listExists) {
            this._blobs = value.map((file: BlobType) => {
            const blob: BlobType = {
                ...file,
                name: file.name,
                lastModified: file.lastModified,
                lastModifiedDate: file.lastModifiedDate,
                preview: file.preview,
                size: file.size,
                type: file.type
            };
            return blob;
        });
      }
    }

}