import { connect } from 'react-redux';
import AutoDetailsComponent from './auto-details.component';
import { AutoDetailsType } from './types';
import { AutoDetailsDispatcher } from './action-dispatcher';
import { AutoReducersCombinedType, AutoReducerItemsType } from '../reducer';

export const mapStateToProps = (state: AutoReducersCombinedType, props: AutoDetailsType) => {

    let data = ((state.items as AutoReducerItemsType).details  as AutoDetailsType);

    return {
        data: {
            ...data
        }
    };
};

export const mapDispatchToProps = AutoDetailsDispatcher;

export default connect(mapStateToProps, mapDispatchToProps)(AutoDetailsComponent);