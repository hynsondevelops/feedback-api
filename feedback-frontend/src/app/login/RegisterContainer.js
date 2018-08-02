import { connect } from 'react-redux';
import RegisterComponent from './RegisterComponent';
import operations from '../home/duck/operations.js'

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
	const handleRegister = (email, password) => {
    	dispatch(operations.registerUser(email, password))	
    }
    return {handleRegister}
}

const RegisterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterComponent)

export default RegisterContainer;