import { Dispatch } from 'react-redux';
import { FileUploadedDispatcherType, FilesToUploadDispatcherType } from './file-upload.action-dispatcher.type';
import { ImageType } from '../types/image.type';
import { fileUploadedActionCreator } from '../action-creators/file-uploaded.action-creator';
import { filesToUploadActionCreator } from '../action-creators/files-to-upload.action-creator';
import { BlobType } from '../types/blob.type';

export const fileUploadedDispatcher = (dispatch: Dispatch<FileUploadedDispatcherType>): FileUploadedDispatcherType => {
    return {
        updateFilesUploaded: (file: ImageType) => { 
            dispatch(fileUploadedActionCreator(file));
       }
    };   
};

export const filesToUploadDispatcher = (dispatch: Dispatch<FilesToUploadDispatcherType>): 
FilesToUploadDispatcherType => {
    
    return {
        updateFilesToUpload: (files: Array<BlobType>) => { 
            console.log('---dispatcher hit,', files);
            dispatch(filesToUploadActionCreator(files));
       }
    };   
};