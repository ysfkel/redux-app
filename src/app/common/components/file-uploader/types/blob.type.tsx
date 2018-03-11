export interface BlobType extends Blob {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    preview: string;
    size: number;
    type: string;
}

