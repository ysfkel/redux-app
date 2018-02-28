import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreStateType } from './app/states/app.state';
import { Reducer } from 'redux';
import { autoReducer } from './app/auto/placead/auto.reducer';

export interface ReducersCombinedType {
    [key: string]: Reducer<any>;
    autoReducer: Reducer<StoreStateType>;
}

export const getReducers = (): ReducersCombinedType => {
     return {
        autoReducer: autoReducer
    };
};

const rootReducer: Reducer<any> = combineReducers(getReducers());

export default createStore<StoreStateType>(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
