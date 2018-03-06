
import * as actions from './action-titles';
import { AutoAdDetailsType } from './types';
import { UpdateAutoAdDetailsActionType } from '../action-creator.types';

export const updateAutoDetailsAction = ( payload: AutoAdDetailsType ):
   UpdateAutoAdDetailsActionType => {
    return {
        type: actions.UPDATE_AUTO_AD_DETAILS,
        payload: payload
     };
};