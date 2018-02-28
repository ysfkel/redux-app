import { connect } from 'react-redux';
import AutoAdDetailsComponent from './auto-ad-details.component';
import { AutoAdDetailsType } from './types';
import { DetailsDispatcher } from './action-dispatchers';
import { ReducersCombinedType } from '../../../../store';
//import { StoreStateType } from '../../../states/app.state';
export const mapStateToProps = (state: any, props: AutoAdDetailsType) => {
    
    //let data = (state.autoReducer as StoreStateType);
    //console.log('state--', state.autoReducer, data);

    return  {...state.autoReducer};
};

export const mapDispatchToProps = DetailsDispatcher;

export default connect(mapStateToProps, mapDispatchToProps )(AutoAdDetailsComponent);
