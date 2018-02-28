import * as React from 'react';
import Button from 'material-ui/Button';
import { AutoAdDetailsType } from './types';
import { DetailsDispatcherType } from './action-dispatchers.types';

export interface Props {
    title: string;
    mobile: string;
    location: string;
    description: string;
    updateDetails?: () => void;
}

export default class AutoAdDetailsComponent extends React.Component<Props & DetailsDispatcherType, AutoAdDetailsType> {

    constructor ( props: Props & DetailsDispatcherType ) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
         console.log('event ', e);
    }
    render() {
        console.log('--onIncrement, onDecrement', this.props.updateDetails);
        return (
            <div>
            <h1>details</h1>
            <input
                id="name"
                value={this.props.title}
                onChange={e => this.handleTextChange(e)}
                
            />
            <Button onClick={this.props.updateDetails}>UPDATE</Button>
            </div>
        );
    }
}
