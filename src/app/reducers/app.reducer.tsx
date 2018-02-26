import { EnthusiasmAction } from '../actions/app.actions';
import { StoreState } from '../states/app.state';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/action-titles';

const initState: StoreState = {
  languageName: 'javascript',
  enthusiasmLevel: 20
};

export const enthusiasm = ( state: StoreState = initState, action: EnthusiasmAction ): StoreState => {
  console.log('action fire red');
  switch (action.type) {
       case INCREMENT_ENTHUSIASM:
         return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
       case DECREMENT_ENTHUSIASM:
         return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
       default:
         return state;  
  }
};