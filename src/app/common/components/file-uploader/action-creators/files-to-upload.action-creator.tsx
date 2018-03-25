
import * as actions from './action-titles';
import { BlobType } from '../types/blob.type';
import { FilesToUploadActionCreatorType } from './action.types';

export const filesToUploadActionCreator = ( payload: Array<BlobType> ):
FilesToUploadActionCreatorType => {
    return {
        type: actions.FILES_TO_UPLOAD_ACTION,
        payload: payload
     };
};