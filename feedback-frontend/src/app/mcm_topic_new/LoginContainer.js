import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import store from '../../store/configureStore.js'
import {authenticateUser, emailFormChange, passwordFormChange} from '../../actions/actions.js'

const mapDispatchToProps = (dispatch) => {
	const handleLogin = (email, password) => {
    	store.dispatch(authenticateUser(email, password))	
    }
    return {handleLogin}
}

const LoginContainer = connect(
	mapDispatchToProps
)(LoginComponent)

export default LoginContainer;