import { AutoType } from '../auto/auto.type';
import { FileUploadStateType } from '../common/components/file-uploader/state';

export interface StoreStateType {
    newAuto: AutoType;
    fileUploadState: FileUploadStateType;
}