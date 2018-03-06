
import * as React from 'react';
import Button from 'material-ui/Button';
const { Component } = React;
import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Auto {
    advID: string;
}

interface Props extends RouteComponentProps<Auto> {

}

interface AutoContainerState {

}

class AutoContainer extends Component<Props, AutoContainerState> {
     constructor(props: Props) {
          super(props);
          console.log('hello ', this.props);
     }
    render() {
        return (
           <div>
                <h1>hello</h1>
            <Button onClick={() => this.props.history.push( '/ad-details' )} > save </Button>
            <li><Link to="/ad-details">AD details</Link></li>
            <li><Link to="/details">DETAILS</Link></li>
            <li><Link to="/main">main</Link></li>
           </div>
        );
    }
}

export default withRouter(AutoContainer) as typeof AutoContainer;