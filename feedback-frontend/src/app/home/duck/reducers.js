import types from './types';

const INITIAL_STATE = {
	email: "",
	auth_token: null
}

function homeReducer(state = {}, action){
  console.log(action)
  switch(action.type){
    // saves the token into the state
    case "AUTH_SET_TOKEN":
      return action.payload.token
    // discards the current token (logout)
    case types.AUTH_DISCARD_TOKEN:
      return {};
    // saves the current user
    case types.AUTH_SET_USER:
      return {
        ...state,
        //user
      };
    case types.EMAIL_FORM_CHANGE:
      return Object.assign({}, state, {email: action.email})
    case types.PASSWORD_FORM_CHANGE: 
      return Object.assign({}, state, {password: action.password})
    case types.REQUEST_TOKEN: 
      return Object.assign({}, state, token(state, action));
    case types.RECIEVE_TOKEN: 
    	console.log("TOKEN")
      return Object.assign({}, state, token(state, action))
    case types.USER_LOGOUT: 
      return Object.assign({}, state, {email: undefined, password: undefined, token: undefined})
    // as always, on default do nothing
    case types.SUCCESSFUL_LOGIN:
      return {...state}
    default:
      return state;
  }
}

function token(state = {isFetching: false, token: null}, action, email) {
  switch(action.type) {
    case types.REQUEST_TOKEN: 
      return Object.assign({}, state, {isFetching: true, token: null, email: null})
    case types.RECIEVE_TOKEN: 
      console.log(state)
      return Object.assign({}, state, {isFetching: false, token: action.token, recievedAt: action.recievedAt, email: action.email, teacher_name: action.teacher_name})
    default:
      return state
  }
}

export default homeReducer;