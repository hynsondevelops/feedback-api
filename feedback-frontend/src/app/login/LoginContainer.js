import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import operations from '../home/duck/operations.js'

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
	const handleLogin = (email, password) => {
    	dispatch(operations.authenticateUser(email, password))	
    }
    return {handleLogin}
}

const LoginContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginComponent)

export default LoginContainer;