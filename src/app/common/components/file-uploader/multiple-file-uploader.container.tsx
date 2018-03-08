import { FileUploadStateType } from './state';
import { AppReducerItemsType } from '../../../reducers/app.reducer';
import { BlobType } from './types/blob-type';
import MultipleFilesUploaderComponent, { FilesProps } from './multiple-file-uploader.component';
import { connect } from 'react-redux';
import { filesToUploadDispatcher } from './dispatchers/file-upload.action-dispatcher';

export const mapStateToProps = (state: AppReducerItemsType, props: Array<BlobType> ): FilesProps => {

    const file: FileUploadStateType = state.fileUploadReducer;

    return { 
        data: [...file.filesToUpload]
    };

};

export const mapDispatchToProps = filesToUploadDispatcher;

const MultipleFilesUploaderContainer =  connect(mapStateToProps, mapDispatchToProps )(MultipleFilesUploaderComponent);

export default MultipleFilesUploaderContainer;