import { BlobType } from './types/blob-type';
import { ImageType } from './types/image';


export interface FileUploadStateType {
    filesToUploaded: Array<BlobType>,
    uploadedFiles: Array<ImageType>
 }