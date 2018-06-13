import types from './types.js'


export function authSetToken(token) {
  return {
    type: types.AUTH_SET_TOKEN,
    token
  }
}

export function authDiscardToken() {
  return {type: types.AUTH_DISCARD_TOKEN}
}

export function authSetUser(user) {
  return { 
    type: types.AUTH_SET_USER,
    user
  }
}

export function authRequest() {
  return {type: types.AUTH_REQUEST}
}

export function requestToken(email) {
  return {
    type: types.REQUEST_TOKEN,
    token: null,
    email
  }
}

export function recieveToken(json, email) {
  return {
    type: types.RECIEVE_TOKEN,
    token: json.data.auth_token,
    recievedAt: Date.now(), 
    email
  }
}

export function emailFormChange(email) {
  return {
    type: types.EMAIL_FORM_CHANGE,
    email
  }
}

export function passwordFormChange(password) {
  return {
    type: types.PASSWORD_FORM_CHANGE,
    password
  }
}

export function successfulLogin() {
  return {
    type: types.SUCCESSFUL_LOGIN
  }
}
