
import * as actions from '../../action-titles';
import { ImageType } from '../../types/image';

export interface FileUploadedActionCreatorType {
    type: actions.FILE_UPLOADED_ACTION;
    payload: ImageType;
}

export const fileUploadedActionCreator = ( payload: ImageType ):
FileUploadedActionCreatorType => {
    return {
        type: actions.FILE_UPLOADED_ACTION,
        payload: payload
     };
};

export type FileUploadedAction = FileUploadedActionCreatorType;
  