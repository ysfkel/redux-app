import { Dispatch } from 'react-redux';
import { AutoAdDetailsDispatcherType } from './action-dispatcher.types';
import * as actions from './action-creators';
import { AutoAdDetailsType } from './types';

export const DetailsDispatcher = (dispatch: Dispatch<AutoAdDetailsDispatcherType>): AutoAdDetailsDispatcherType => {
    return {
        updateDetails: (details: AutoAdDetailsType) => { 
            dispatch( actions.updateAutoDetailsAction(details));
       }
    };   
};