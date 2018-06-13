import {authSetToken, authDiscardToken, authSetUser, authRequest, requestToken, recieveToken, emailFormChange, passwordFormChange, successfulLogin} from './types.js'

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

export default {
	authSetToken,
	authDiscardToken,
	authSetUser,
	authRequest,
	emailFormChange,
	passwordFormChange,
	authenticateUser
}