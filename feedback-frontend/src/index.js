import HomeContainer from './app/home/HomeContainer.js'
import McmFeedbackGeneratorContainer from './app/mcm_feedback_generator/McmFeedbackGeneratorContainer.js'
import McmTopicsContainer from './app/mcm_topics/McmTopicsContainer.js'
import McmTopicEditContainer from './app/mcm_topic_edit/McmTopicEditContainer.js'


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// redux-logger is a middleware that lets you log every state change
import logger from 'redux-logger';
// redux-thunk is a middleware that lets you dispatch async actions
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import homeReducer from './app/home/duck/reducers'
import mcmFeedbackGeneratorReducer from './app/mcm_feedback_generator/duck/reducers'
import mcmIndexReducer from './app/mcm_topics/duck/reducers'
import mcmTopicEditReducer from './app/mcm_topic_edit/duck/reducers'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getMcmIndexOperation from './app/mcm_topics/duck/operations'


const history = createHistory()

// THE WORK:
const routesMap = { 
  HOME: '/home',      // action <-> url path
  MCM_FEEDBACK_GENERATOR: '/MCM_FEEDBACK_GENERATOR',
  MCM_TOPICS: '/mcm_topics'
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspe
const rootReducer = combineReducers({location: reducer, home: homeReducer, mcmFeedbackGenerator: mcmFeedbackGeneratorReducer, mcm_index: mcmIndexReducer, mcm_topic_edit: mcmTopicEditReducer})

const middlewares = applyMiddleware(thunk, logger, middleware);
const store = createStore(rootReducer, compose(enhancer, middlewares));

//

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mcm_feedback_generator">About</Link>
        </li>
        <li>
          <Link to="/mcm_topics">MCM Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={HomeContainer} />
      <Route path="/mcm_feedback_generator" component={McmFeedbackGeneratorContainer} />
      //Change the below to the correct components
      <Route path="/mcm_topics/new" component={McmFeedbackGeneratorContainer} />
      <Route path="/mcm_topics/:id/edit" component={McmTopicEditContainer} />
      <Route exact path="/mcm_topics" component={McmTopicsContainer} />
      <Route path="/student_levels/new" component={McmFeedbackGeneratorContainer} />
      <Route path="/student_levels/:id/edit" component={McmFeedbackGeneratorContainer} />
      <Route path="/student_levels" component={McmFeedbackGeneratorContainer} />



    </div>
  </Router>
);


//

ReactDOM.render(
  <Provider store={store}>
    <BasicExample />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

