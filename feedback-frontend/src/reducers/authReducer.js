import {AUTH_SET_TOKEN, AUTH_DISCARD_TOKEN, AUTH_SET_USER, REQUEST_TOKEN, RECIEVE_TOKEN, EMAIL_FORM_CHANGE, PASSWORD_FORM_CHANGE} from '../constants/constants.js';

function authReducer(state = {}, action){
  console.log(action)
  switch(action.type){
    // saves the token into the state
    case "AUTH_SET_TOKEN":
      return action.payload.token
    // discards the current token (logout)
    case AUTH_DISCARD_TOKEN:
      return {};
    // saves the current user
    case AUTH_SET_USER:
      return {
        ...state,
        //user
      };
    case EMAIL_FORM_CHANGE:
      return Object.assign({}, state, {email: action.email})
    case PASSWORD_FORM_CHANGE: 
      return Object.assign({}, state, {password: action.password})
    case REQUEST_TOKEN: 
      return Object.assign({}, state, token(state, action));
    case RECIEVE_TOKEN: 
      return Object.assign({}, state, token(state, action))
    // as always, on default do nothing
    default:
      return state;
  }
}

function token(state = {isFetching: false, token: null}, action, email) {
  switch(action.type) {
    case REQUEST_TOKEN: 
      return Object.assign({}, state, {isFetching: true, token: null, email: null})
    case RECIEVE_TOKEN: 
      return Object.assign({}, state, {isFetching: false, token: action.token, recievedAt: action.recievedAt, email: action.email})
    default:
      return state
  }
}

export default authReducer;