
import * as actions from '../../action-titles';
import { BlobType } from '../../types/blob-type';

export interface FilesToUploadActionCreatorType {
    type: actions.UPDATE_UPLOADED_FILES;
    payload: Array<BlobType>;
}

export const filesToUploadActionCreator = ( payload: Array<BlobType> ):
FilesToUploadActionCreatorType => {
    return {
        type: actions.UPDATE_UPLOADED_FILES,
        payload: payload
     };
};

export type FilesToUploadAction = FilesToUploadActionCreatorType;
  