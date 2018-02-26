import { connect, Dispatch } from 'react-redux';
import AutoAdDetailsContainer from './auto-ad-details.component';
import { StoreState } from '../../../states/app.state';
import * as actions from '../../../actions/app.actions';

export const mapStateToProps = ({ enthusiasmLevel, languageName }: StoreState) => {
    return {
        enthusiasmLevel: enthusiasmLevel,
        name: languageName
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
 return {
     onIncrement: () => { 
         console.log('action fire');
         dispatch( actions.incrementEnthusiasm());
    },
     onDecrement: () => dispatch(actions.decrementEnthusiasm())
 };
     
};

export default connect( mapStateToProps, mapDispatchToProps )(AutoAdDetailsContainer);