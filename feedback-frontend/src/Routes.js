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
      <Route exact path="/mcm_topic" component={McmTopicForm} />
      <Route exact path="/test" component={Test} />
      <Route path="/mcm_topics/new" component={NewMcmTopic} />
      <Route exact path="/mcm_topics/:id/edit" component={EditMcmTopic} />
      <Route path="/login" component={UserLogIn} />

    </Switch>
  </Router>;

export default Routes;
