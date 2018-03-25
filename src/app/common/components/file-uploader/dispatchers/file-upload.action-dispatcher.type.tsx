
import { BlobType } from '../types/blob.type';
import { ImageType } from '../types/image.type';

export interface FileUploadedDispatcherType {
    updateFilesUploaded: (data: ImageType) => void;
}

export interface FilesToUploadDispatcherType {
    updateFilesToUpload: (data: Array<BlobType>) => void;
}