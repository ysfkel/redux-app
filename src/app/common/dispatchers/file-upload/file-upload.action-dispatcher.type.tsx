
import { BlobType } from '../../types/blob-type';

export interface FilesUploadedDispatcherType {
    updateUploadedFiles: (data: Array<BlobType>) => void;
}