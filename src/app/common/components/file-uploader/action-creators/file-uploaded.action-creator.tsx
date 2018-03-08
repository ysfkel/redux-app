
import * as actions from './action-titles';
import { ImageType } from '../types/image';
import { FileUploadedActionCreatorType } from './action.types';

export const fileUploadedActionCreator = ( payload: ImageType ):
FileUploadedActionCreatorType => {
    return {
        type: actions.FILE_UPLOADED_ACTION,
        payload: payload
     };
};