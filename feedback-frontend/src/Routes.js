import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import McmTopicForm from './McmTopicForm';
import Test from './Test';

const history = createBrowserHistory();
const Routes = () =>
  <Router history={history}>
    <Switch>
      <Route exact path="/mcm_topic" component={McmTopicForm} />
      <Route exact path="/test" component={Test} />
    </Switch>
  </Router>;

export default Routes;
