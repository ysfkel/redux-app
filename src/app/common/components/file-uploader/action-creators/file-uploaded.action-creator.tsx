
import * as actions from './action-titles';
import { ImageType } from '../types/image.type';
import { FileUploadedActionCreatorType } from './action.types';

export const fileUploadedActionCreator = ( payload: ImageType ):
FileUploadedActionCreatorType => {
    return {
        type: actions.FILE_UPLOADED_ACTION,
        payload: payload
     };
};