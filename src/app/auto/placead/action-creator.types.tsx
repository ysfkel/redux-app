
import * as actions_autoAdDetails from './ad-details/action-titles';
import * as actions_autoDetails from './auto-details/action-titles';
import { AutoAdDetailsType } from './ad-details/types';
import { AutoDetailsType } from './auto-details/types';

export interface UpdateAutoAdDetailsActionType {
    type: actions_autoAdDetails.UPDATE_AUTO_AD_DETAILS;
    payload: AutoAdDetailsType;
}

export interface UpdateAutoDetailsActionType {
    type: actions_autoDetails.UPDATE_AUTO_DETAILS;
    payload: AutoDetailsType;
}

export type AutoAction = UpdateAutoDetailsActionType | UpdateAutoAdDetailsActionType;
  