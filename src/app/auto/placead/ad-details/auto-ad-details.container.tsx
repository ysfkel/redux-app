import { connect } from 'react-redux';
import AutoAdDetailsComponent from './auto-ad-details.component';
import { AutoAdDetailsType } from './types';
import { DetailsDispatcher } from './action-dispatcher';
import { AutoReducersCombinedType } from '../reducer';
import { AutoReducerItemsType } from '../reducer';
import { AppReducerItemsType } from '../../../reducers/app.reducer';

export const mapStateToProps = (state: AppReducerItemsType, props: AutoAdDetailsType) => {
    console.log('--data', state);
    const auto: AutoReducersCombinedType = state.autoReducers;
    let data = (auto.items as AutoReducerItemsType).adDetails as AutoAdDetailsType;
   
    return  { 
            data: {
            ...data
        }
    };
};

export const mapDispatchToProps = DetailsDispatcher;

export default connect(mapStateToProps, mapDispatchToProps )(AutoAdDetailsComponent);
