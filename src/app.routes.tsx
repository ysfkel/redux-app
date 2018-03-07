import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AutoAdDetailsContainer from './app/auto/placead/ad-details/auto-ad-details.container';
import AutoDetailsContainer from './app/auto/placead/auto-details/auto-details.container';
import AutoContainer from './app/auto/auto.container';
import { Link } from 'react-router-dom';
import FileUploader from './app/common/components/file-uploader/file-uploader.component';
const { Component } = React;
export default class AppRoutes extends Component {
       
  render() {
    return (
      <div>
         <li><Link to="/ad-details">books</Link></li>
         <li><Link to="/upload-files">Upload files</Link></li>
         <li><Link to="/main">main</Link></li>
       <Switch>
        <Route exact={true} path={`/ad-details`} component={AutoAdDetailsContainer}/>
        <Route  path={`/details`} component={AutoDetailsContainer}/>
        <Route  path={`/main`} component={AutoContainer}/>
        <Route  path={`/upload-files`} component={FileUploader} />
       </Switch>
      </div>
      );
  }

}
