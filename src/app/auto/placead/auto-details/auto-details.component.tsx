import * as React from 'react';
import { AutoDetailsType } from './types';
import { AutoDetailsDispatcherType } from './action-dispatcher.types';

interface AutoDetailsDataProps {
     data: AutoDetailsType; 
}

export default class AutoDetailsComponent extends
 React.Component<AutoDetailsDataProps & AutoDetailsDispatcherType, AutoDetailsType> {

    constructor (props: AutoDetailsDataProps & AutoDetailsDispatcherType) {
         super(props);
    }

    render() {
        return(
            <div>
                 <h1>hello world</h1>
            </div>
        );
    }

}