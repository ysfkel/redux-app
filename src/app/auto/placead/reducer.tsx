import { combineReducers, Reducer } from 'redux';
import { autoReducer } from './auto.reducer';
import { autoAdDetailsReducer } from './ad-details/reducer';
import { autoDetailsReducer } from './auto-details/reducer';
import { AutoDetailsType } from './auto-details/types';
import { AutoAdDetailsType } from './ad-details/types';

export interface AutoReducerItemsType {
    adDetails: AutoAdDetailsType;
    details: AutoDetailsType;
}
export interface AutoReducersCombinedType {
    [key: string]: Reducer<any>;
    auto: any; // Reducer<StoreStateType>;
    items: any;
}

export const getReducers = (): AutoReducersCombinedType => {
     return {
        auto: autoReducer,
        items: combineReducers<AutoReducerItemsType>({
            adDetails: autoAdDetailsReducer,
            details: autoDetailsReducer
        })
    };
};

export const autoReducers: Reducer<any> = combineReducers(getReducers());