import { combineReducers } from 'redux';
import { autoReducers, AutoReducersCombinedType } from '../auto/placead/reducer';
import { Reducer } from 'redux';
import { fileUploadReducer } from '../common/components/file-uploader/reducers/reducer';
import { FileUploadStateType } from '../common/components/file-uploader/state';
import { StoreStateType } from '../states/app.state';

export interface AppReducerItemsType {
    autoReducers: AutoReducersCombinedType;
    fileUploadReducer: FileUploadStateType;
}

export const appReducer: Reducer<StoreStateType> = combineReducers<StoreStateType>({
    autoReducers,
    fileUploadReducer
});