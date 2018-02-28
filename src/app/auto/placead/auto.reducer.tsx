import { StoreStateType } from '../../states/app.state';
import { UPDATE_AUTO_AD_DETAILS } from './ad-details/action-titles';
import { AutoAction } from './ad-details/action-creators';

export const INITIAL_STATE: StoreStateType = {
  newAuto: {
    title: 'this is a test',
    mobile: '',
    location: '',
    description: ''
  }
};

export const autoReducer = ( state: StoreStateType = INITIAL_STATE, action: AutoAction ): StoreStateType => {
    console.log('update action', action);
    switch (action.type) {
         case UPDATE_AUTO_AD_DETAILS:
           return { ...state, 
            newAuto: { ...action.payload }
          };
         default:
           return state;  
    }
  };
