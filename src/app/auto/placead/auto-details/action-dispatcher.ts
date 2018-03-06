import { Dispatch } from 'react-redux';
import { AutoDetailsDispatcherType } from './action-dispatcher.types';
import * as actions from './action-creators';
import { AutoDetailsType } from './types';

export const AutoDetailsDispatcher = (dispatch: Dispatch<AutoDetailsDispatcherType>): AutoDetailsDispatcherType => {
    return {
        updateDetails: (details: AutoDetailsType) => { 
            dispatch( actions.updateAutoDetailsAction(details));
       }
    };   
};