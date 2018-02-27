import { connect} from 'react-redux';
import AutoAdDetailsComponent from './auto-ad-details.component';
import { AutoAdDetailsType } from './types';
import { DetailsDispatch } from './action-dispatchers'

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

export const mapDispatchToProps = DetailsDispatch

export default connect(mapStateToProps, mapDispatchToProps )(AutoAdDetailsComponent);
