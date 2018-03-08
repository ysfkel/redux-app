import { BlobType } from './types/blob-type';
import { ImageType } from './types/image';

export interface FileUploadStateType {
    filesToUpload: Array<BlobType>;
    filesUploaded: Array<ImageType>;
 }