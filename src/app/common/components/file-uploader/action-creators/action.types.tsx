import { ImageType } from '../types/image';
import { BlobType } from '../types/blob-type';
import * as actions from './action-titles';

export interface FileUploadedActionCreatorType {
    type: actions.FILE_UPLOADED_ACTION;
    payload: ImageType;
}

export interface FilesToUploadActionCreatorType {
    type: actions.FILES_TO_UPLOAD_ACTION;
    payload: Array<BlobType>;
}

export type FileActionType = FilesToUploadActionCreatorType | FileUploadedActionCreatorType;