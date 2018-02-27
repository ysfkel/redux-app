//import { EnthusiasmAction } from '../actions/app.actions';
import { StoreState } from '../../states/app.state';
import { UPDATE_AUTO_AD_DETAILS } from './ad-details/action-titles';
import { AutoAction } from './ad-details/action-creators';

export const INITIAL_STATE: StoreState = {
  languageName: 'javascript',
  enthusiasmLevel: 20,
  newAuto:{
    title: '',
    mobile: '',
    location: '',
    description: ''
  }
};

export const autoReducer = ( state: StoreState = INITIAL_STATE, action: AutoAction ): StoreState => {
    console.log('update action',action);
    switch (action.type) {
         case UPDATE_AUTO_AD_DETAILS:
           return { ...state, 
            newAuto:{...action.payload}};
         default:
           return state;  
    }
  };
