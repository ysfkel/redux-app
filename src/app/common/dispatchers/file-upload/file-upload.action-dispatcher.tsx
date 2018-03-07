import { Dispatch } from 'react-redux';
import { FilesUploadedDispatcherType } from './file-upload.action-dispatcher.type';
import * as actions from '../../action-creators/file-upload/files-to-upload.action-creator';
import { BlobType } from '../../types/blob-type';

export const DetailsDispatcher = (dispatch: Dispatch<FilesUploadedDispatcherType>): FilesUploadedDispatcherType => {
    return {
        updateUploadedFiles: (files: Array<BlobType>) => { 
            dispatch( actions.filesToUploadActionCreator(files));
       }
    };   
};