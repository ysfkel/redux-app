import { connect } from 'react-redux';
import AutoDetailsComponent from './auto-details.component';
import { AutoDetailsType } from './types';
import { AutoDetailsDispatcher } from './action-dispatcher';
import { AutoReducersCombinedType, AutoReducerItemsType } from '../reducer';
import { AppReducerItemsType } from '../../../reducers/app.reducer';

export const mapStateToProps = (state: AppReducerItemsType, props: AutoDetailsType) => {
    console.log('--data', state);
    const auto: AutoReducersCombinedType = state.autoReducers;
    let data = (auto.items as AutoReducerItemsType).details as AutoDetailsType;
   
    return {
        data: {
            ...data
        }
    };
};

export const mapDispatchToProps = AutoDetailsDispatcher;

export default connect(mapStateToProps, mapDispatchToProps)(AutoDetailsComponent);