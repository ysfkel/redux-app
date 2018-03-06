import { AutoAdDetailsType } from './types';
import { UPDATE_AUTO_AD_DETAILS } from './action-titles';
import { UpdateAutoAdDetailsActionType } from '../action-creator.types';

export const INITIAL_STATE: AutoAdDetailsType = {
    title: 'this is a test',
    mobile: '',
    location: '',
    description: ''
};

export const autoAdDetailsReducer = ( 
  state: AutoAdDetailsType = INITIAL_STATE, 
  action: UpdateAutoAdDetailsActionType ): AutoAdDetailsType => {
  switch (action.type) {
      case UPDATE_AUTO_AD_DETAILS:
        return { ...state, 
          ...action.payload 
        };
      default:
        return state;  
  }
};