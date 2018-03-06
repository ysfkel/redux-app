import * as actions from './action-titles';
import { AutoDetailsType } from './types';
import { UpdateAutoDetailsActionType } from '../action-creator.types';

export const updateAutoDetailsAction = ( payload: AutoDetailsType ):
UpdateAutoDetailsActionType => {
    return {
        type: actions.UPDATE_AUTO_DETAILS,
        payload: payload
     };
};