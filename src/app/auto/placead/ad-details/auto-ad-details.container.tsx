import { connect } from 'react-redux';
import AutoAdDetailsComponent from './auto-ad-details.component';
import { AutoAdDetailsType } from './types';
import { DetailsDispatcher } from './action-dispatcher';
import { AutoReducersCombinedType } from '../reducer';
import { AutoReducerItemsType } from '../reducer';

export const mapStateToProps = (state: AutoReducersCombinedType, props: AutoAdDetailsType) => {
    
    let data = ((state.items as AutoReducerItemsType).adDetails  as AutoAdDetailsType);
    console.log('--data', data, state);
   
    return  { 
            data: {
            ...data
        }
    };
};

export const mapDispatchToProps = DetailsDispatcher;

export default connect(mapStateToProps, mapDispatchToProps )(AutoAdDetailsComponent);
