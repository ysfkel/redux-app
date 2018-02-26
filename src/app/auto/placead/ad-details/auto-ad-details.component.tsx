import * as React from 'react';
import Button from 'material-ui/Button';
export interface Props {
      name: string;
      enthusiasmLevel?: number;
      onIncrement: () => void;
      onDecrement: () => void;
}
const AutoAdDetailsContainer = ( { name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props ) => {
    if ( enthusiasmLevel <= 0 ) {
         throw new Error(' You could be a little more enthusiastic. :D');
    }
    console.log('--onIncrement, onDecrement', onIncrement, onDecrement);
    return (
        <div>
          <h1>details</h1>
          <Button onClick={onDecrement}>-</Button>
          <Button onClick={onIncrement}>+</Button>
        </div>
    );
};

export default AutoAdDetailsContainer;
// const { Component } = React;

// export default class AutoAdDetailsContainer extends Component {

//     render() {
//         return (
//            <div>
//                 <h1>details</h1>
//             <Button>save</Button>
//            </div>
//         );
//     }
// }