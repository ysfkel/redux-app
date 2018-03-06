
import { UpdateAutoDetailsActionType } from '../action-creator.types';
import { AutoDetailsType } from './types';
import { UPDATE_AUTO_DETAILS } from './action-titles';

export const INITIAL_STATE: AutoDetailsType = {
    make: '',
    kilometers: '',
    model: '',
    bodyType: '',
    trim: '',
    engineSize: '',
    year: 1997,
    price: 0,
};

export const autoDetailsReducer = ( state: AutoDetailsType = INITIAL_STATE, action: UpdateAutoDetailsActionType ): 
AutoDetailsType => {
      console.log('update action', action);
      switch (action.type) {
          case UPDATE_AUTO_DETAILS:
            return { ...state, 
               ...action.payload 
            };
          default:
            return state;  
      }
};