
import * as actions from './action-titles';
import { AutoAdDetailsType } from './types';

export interface UpdateAutoDetailsActionType {
  type: actions.UPDATE_AUTO_AD_DETAILS;
  payload:AutoAdDetailsType
}

export type AutoAction = UpdateAutoDetailsActionType// | DecrementAction;

export const updateAutoDetailsAction= (payload:AutoAdDetailsType): UpdateAutoDetailsActionType => {
    console.log('action fire');
    return {
        type: actions.UPDATE_AUTO_AD_DETAILS,
        payload:payload
     };
};

