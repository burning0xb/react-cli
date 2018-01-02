import React from 'react';
import { ReduxRouter } from 'redux-router';
import { Route, IndexRoute } from 'react-router';
import config from './config';
import App from './containers/App';
import Home from './containers/Home';
import R1 from './containers/Test/R1';
// import * as PayPc from './containers/paypc';
// 配置路由
export default function getRoutes() {
  return (
    <ReduxRouter>
      <Route path={config.contextRoot + '/'} name="首页" component={App}>
        { /* Home (main) route */ }
        <IndexRoute name="Index" component={Home} />
        <Route name="R1" component={R1} path="r1"/>
        { /* Routes requiring login */ }
      </Route>
    </ReduxRouter>
  );
}
