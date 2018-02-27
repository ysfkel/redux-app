import { connect, Dispatch } from 'react-redux';
import AutoAdDetailsComponent from './auto-ad-details.component';
import { StoreState } from '../../../states/app.state';
import * as actions from '../../../actions/app.actions';
import { Props } from './auto-ad-details.component'
import { AutoAdDetailsType } from './types';

export const mapStateToProps = ({ 
title,
mobile,
location,
description}: AutoAdDetailsType) => {
    return {
        title: '',
        mobile:'',
        location: '',
        description:''
    };
};

export interface IDispatch{
    onIncrement:()=>any
    onDecrement:()=>any
}
export const mapDispatchToProps = (dispatch: Dispatch<IDispatch>):IDispatch => {
 return {
     onIncrement: () => { 
         console.log('action fire');
         dispatch( actions.incrementEnthusiasm());
    },
     onDecrement: () => dispatch(actions.decrementEnthusiasm())
 };
     
};

export default connect(mapStateToProps, mapDispatchToProps )(AutoAdDetailsComponent);

// export const mapStateToProps = ({ enthusiasmLevel, languageName }: StoreState) => {
//     return {
//         enthusiasmLevel: enthusiasmLevel,
//         name: languageName
//     };
// };

// export const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
//  return {
//      onIncrement: () => { 
//          console.log('action fire');
//          dispatch( actions.incrementEnthusiasm());
//     },
//      onDecrement: () => dispatch(actions.decrementEnthusiasm())
//  };
     
// };

// export default connect(mapStateToProps, mapDispatchToProps )(AutoAdDetailsComponent);