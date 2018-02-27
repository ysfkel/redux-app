import * as React from 'react';
import Button from 'material-ui/Button';
import { AutoAdDetailsType } from './types'
import { IDetailsDispatch } from './action-dispatchers.types';

export interface Props {
    title: string;
    mobile: string;
    location: string;
    description: string;
    updateDetails?: () => void;
}

export default class AutoAdDetailsComponent extends React.Component<Props & IDetailsDispatch,AutoAdDetailsType>{
    // ( { name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props ) => {
    constructor(props:Props & IDetailsDispatch){
        super(props)
    }
    render(){
        console.log('--onIncrement, onDecrement',this.props.updateDetails);
    return (
        <div>
          <h1>details</h1>
          <Button onClick={this.props.updateDetails}>UPDATE</Button>
        </div>
    );
    }
};
