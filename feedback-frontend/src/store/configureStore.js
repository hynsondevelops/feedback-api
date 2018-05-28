import { connectRoutes } from 'redux-first-router'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import userIdReducer from '../reducers/userIdReducer'
import authReducer from '../reducers/authReducer.js'
import {AUTH_SET_TOKEN, AUTH_DISCARD_TOKEN, AUTH_SET_USER} from '../constants/constants.js'
import thunkMiddleware from 'redux-thunk'
import {authenticateUser} from '../actions/actions.js'


const history = createHistory()

// THE WORK:
const routesMap = { 
  HOME: '/home',      // action <-> url path
  USER: '/user/:id',  // :id is a dynamic segment
  AUTH_SET_TOKEN: AUTH_SET_TOKEN,
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspects


// and you already know how the story ends:
const rootReducer = combineReducers({ location: reducer, userId: userIdReducer, auth_info: authReducer })
const middlewares = applyMiddleware(middleware, thunkMiddleware	)
// note the order: enhancer, then middlewares
const store = createStore(rootReducer, compose(enhancer, middlewares))
window.store = store
export default store;