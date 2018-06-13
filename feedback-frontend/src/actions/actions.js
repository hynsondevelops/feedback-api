import {AUTH_SET_TOKEN, AUTH_DISCARD_TOKEN, AUTH_SET_USER, AUTH_REQUEST, REQUEST_TOKEN, RECIEVE_TOKEN, EMAIL_FORM_CHANGE, PASSWORD_FORM_CHANGE, SUCCESSFUL_LOGIN} from '../constants/constants.js'
import axiosClient from '../axiosClient';


export function authSetToken(token) {
  return {
    type: AUTH_SET_TOKEN,
    token
  }
}

export function authDiscardToken() {
  return {type: AUTH_DISCARD_TOKEN}
}

export function authSetUser(user) {
  return { 
    type: AUTH_SET_USER,
    user
  }
}

export function authRequest() {
  return {type: AUTH_REQUEST}
}

export function requestToken(email) {
  return {
    type: REQUEST_TOKEN,
    token: null,
    email: email
  }
}

export function recieveToken(json, email) {
  console.log(json)
  return {
    type: RECIEVE_TOKEN,
    token: json.data.auth_token,
    recievedAt: Date.now(), 
    email
  }
}

export function emailFormChange(email) {
  console.log(email)
  return {
    type: EMAIL_FORM_CHANGE,
    email
  }
}

export function passwordFormChange(password) {
  return {
    type: PASSWORD_FORM_CHANGE,
    password
  }
}

export function successfulLogin() {
  return {
    type: SUCCESSFUL_LOGIN
  }
}

export function authenticateUser(email, password) {
  console.log("authenticate")
  console.log(email)
  console.log(password)
  return (dispatch) => {
    console.log(email)
    dispatch(requestToken(email))
    let url = "/authenticate"
    return axiosClient
      ["post"](url, {
        email: email, 
        password: password
      })
      .then(response => {
        dispatch(recieveToken(response, email))
      })
      .then(response => {
        dispatch(successfulLogin())
      })
      .catch(error => {
        console.log(error)
      });
  }
}