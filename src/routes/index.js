import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import { Home , Login } from './assembiy'
function RouterConfig({ history , app }) {
  
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login/:id" exact component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
