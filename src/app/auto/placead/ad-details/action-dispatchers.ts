import { Dispatch } from 'react-redux';
import { DetailsDispatcherType } from './action-dispatchers.types';
import * as actions from './action-creators';
import { AutoAdDetailsType } from './types';

export const DetailsDispatcher = (dispatch: Dispatch<DetailsDispatcherType>): DetailsDispatcherType => {
    return {
        updateDetails: (details: AutoAdDetailsType) => { 
            dispatch( actions.updateAutoDetailsAction(details));
       }
    };   
};