import * as React from 'react';
import Button from 'material-ui/Button';
import { AutoAdDetailsType } from './types'
import { StoreState } from '../../../states/app.state';
import { Dispatch } from 'react-redux';

import * as actions from '../../../actions/app.actions';
import { IDispatch } from './auto-ad-details.container';

export interface Props {
    title: string;
    mobile: string;
    location: string;
    description: string;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
// export interface Props {
//       name: string;
//       enthusiasmLevel?: number;
//       onIncrement: () => void;
//       onDecrement: () => void;
// }

export default class AutoAdDetailsComponent extends React.Component<Props & IDispatch,AutoAdDetailsType>{// ( { name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props ) => {
    // constructor(props:Props){
    //    // super(props)
    // }
    render(){
        console.log('--onIncrement, onDecrement',this.props.onIncrement,this.props.onDecrement);
    return (
        <div>
          <h1>details</h1>
          <Button onClick={this.props.onDecrement}>-</Button>
          <Button onClick={this.props.onIncrement}>+</Button>
        </div>
    );
    }
};

// const AutoAdDetailsContainer = ( { name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props ) => {
//     if ( enthusiasmLevel <= 0 ) {
//          throw new Error(' You could be a little more enthusiastic. :D');
//     }
//     console.log('--onIncrement, onDecrement', onIncrement, onDecrement);
//     return (
//         <div>
//           <h1>details</h1>
//           <Button onClick={onDecrement}>-</Button>
//           <Button onClick={onIncrement}>+</Button>
//         </div>
//     );
// };

// export default AutoAdDetailsContainer;
