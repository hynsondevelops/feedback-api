import HomeContainer from './app/home/HomeContainer.js'
import McmFeedbackGeneratorContainer from './app/mcm_feedback_generator/McmFeedbackGeneratorContainer.js'
import StudentLevelFeedbackGeneratorContainer from './app/student_feedback_generator/StudentLevelGeneratorContainer.js'
import McmTopicsContainer from './app/mcm_topics/McmTopicsContainer.js'
import McmTopicEditContainer from './app/mcm_topic_edit/McmTopicEditContainer.js'
import McmTopicNewContainer from './app/mcm_topic_new/McmTopicNewContainer.js'
import StudentLevelEditContainer from './app/student_level_edit/StudentLevelEditContainer.js'
import StudentLevelNewContainer from './app/student_level_new/StudentLevelNewContainer.js'
import StudentLevels from './app/student_levels/StudentLevelsContainer.js'
import SessionContainer from './app/login/SessionContainer.js'

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
import studentLevelFeedbackGeneratorReducer from './app/student_feedback_generator/duck/reducers'
import mcmIndexReducer from './app/mcm_topics/duck/reducers'
import studentLevelIndexReducer from './app/student_levels/duck/reducers'
import {mcmTopicEditReducer, studentLevelReducer} from './app/common/duck/reducers'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getMcmIndexOperation from './app/mcm_topics/duck/operations'

import ResponsiveDrawer from './app/common/Sidebar'
import SidebarContainer from './app/common/SidebarContainer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react'


const persistConfig = {
  key: 'root',
  storage,
}
export const history = createHistory()

// THE WORK:
const routesMap = { 
  HOME: '/home',      // action <-> url path
  MCM_FEEDBACK_GENERATOR: '/MCM_FEEDBACK_GENERATOR',
  MCM_TOPICS: '/mcm_topics'
}
console.log(studentLevelReducer)
const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspe
const rootReducer = combineReducers({location: reducer, home: homeReducer, mcmFeedbackGenerator: mcmFeedbackGeneratorReducer, mcm_index: mcmIndexReducer, mcm_topic_edit: mcmTopicEditReducer, student_level: studentLevelReducer, student_level_index: studentLevelIndexReducer, student_level_feedback: studentLevelFeedbackGeneratorReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const middlewares = applyMiddleware(thunk, logger, middleware);
const store = createStore(persistedReducer, compose(enhancer, middlewares));
let persistor = persistStore(store)

//

const BasicExample = () => (
  <Router history = {history}>
    <div>
      <ul>
        <li>
          <Link id="home_link" to="/">Home</Link>
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
      <Route path="/login" component={SessionContainer} />
      <Route path="/mcm_feedback_generator" component={McmFeedbackGeneratorContainer} />
      <Route path="/student_level_feedback_generator" component={StudentLevelFeedbackGeneratorContainer} />
      //Change the below to the correct components
      <Route path="/mcm_topics/new" component={McmTopicNewContainer} />
      <Route path="/mcm_topics/:id/edit" component={McmTopicEditContainer} />
      <Route exact path="/mcm_topics" component={McmTopicsContainer} />
      <Route path="/student_levels/new" component={StudentLevelNewContainer} />
      <Route path="/student_levels/:id/edit" component={StudentLevelEditContainer} />
      <Route exact path="/student_levels" component={StudentLevels} />
    </div>
  </Router>
);


//

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SidebarContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

