import { BlobType } from './types/blob.type';
import { ImageType } from './types/image.type';

export interface FileUploadStateType {
    filesToUpload: Array<BlobType>;
    filesUploaded: Array<ImageType>;
 }