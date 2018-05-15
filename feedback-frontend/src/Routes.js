import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import McmTopicForm from './McmTopicForm';
import NewMcmTopic from './NewMcmTopic';
import EditMcmTopic from './EditMcmTopic';
import Test from './Test';
import UserLogIn from './UserLogIn';


const history = createBrowserHistory();
const Routes = () =>
  <Router history={history}>
  	<Switch>
      <Route path="/" component={UserLogIn} />

    </Switch>
  </Router>;

export default Routes;
