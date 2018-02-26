
import * as actions from '../constants/action-titles';

export interface IncrementAction {
  type: actions.INCREMENT_ENTHUSIASM;
}

export interface DecrementAction {
     type: actions.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementAction | DecrementAction;

export const incrementEnthusiasm = (): IncrementAction => {
    console.log('action fire');
    return {
        type: actions.INCREMENT_ENTHUSIASM
     };
};

export const decrementEnthusiasm = (): DecrementAction => {
    console.log('action fire 2');
    return {
        type: actions.DECREMENT_ENTHUSIASM
     };
};
