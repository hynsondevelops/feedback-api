import {authSetToken, authDiscardToken, authSetUser, authRequest, requestToken, recieveToken, emailFormChange, passwordFormChange, successfulLogin, createUser, logoutUser} from './actions.js'
import axiosClient from '../../../axiosClient';


function authenticateUser(email, password) {
  return (dispatch) => {
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

export function registerUser(email, password) {
  return function (dispatch) {
    return axiosClient
    .post(`/users`, { user: {
        email: email, 
        password: password,
        password_confirmation: password
      }})
    .then(response => {
      dispatch(createUser(response.data))
    })
    .then(response => {
      dispatch(authenticateUser(email, password))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }
}


export default {
	authSetToken,
	authDiscardToken,
	authSetUser,
	authRequest,
	emailFormChange,
	passwordFormChange,
	authenticateUser,
  registerUser
}