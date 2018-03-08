import { combineReducers } from 'redux';
import { autoReducers } from '../auto/placead/reducer';
import { Reducer } from 'redux';

export const appReducer: Reducer<any> = combineReducers({
    autoReducers
});

