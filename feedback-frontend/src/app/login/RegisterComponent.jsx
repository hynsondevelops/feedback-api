import React from 'react';
import { Form, Field } from 'react-final-form'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@material-ui/icons/EnhancedEncryption';

import Button from '@material-ui/core/Button'

class RegisterComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {email: "", password: ""}
	}


	handlePassword(e) {
		this.setState({password: e.target.value})
	}

	handleLogin(e) {
		this.setState({email: e.target.value})
	}

	handleSubmit(e) {
		if (this.validatePassword() && this.validateEmail()) {
			this.props.handleRegister(this.state.email, this.state.password)
		}
		else {
			let errors = ""
			if (!this.validateEmail()) {
				errors += "\nInvalid email format"
			}
			if (!this.validatePassword()) {
				errors += "\nPassword must be atleast 8 characters"
			}
			alert(errors)
		}

	}

	validateEmail() {
		return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.state.email)
	}

	validatePassword() {
		return !(this.state.password == null || this.state.password == "" || this.state.password.length < 8)
	}

	render() {
		return (
			<div>
				<h3> Register </h3>
		        <TextField
		          id="email"
					  name="email-register"
					  type="email"
					  placeholder="Email"
		          InputProps={{
	                startAdornment: <InputAdornment position="start">
	                  <AccountCircle />
	                </InputAdornment>
	              }}
		          onChange={(e) => this.handleLogin(e)}
		          error={!this.validateEmail()}
		          helperText={this.validateEmail() ? "" : "Invalid Email Format"}
		        />
		     <br/>
	            <TextField
	              id="password"
					  name="password-register"
					  type="password"
					  placeholder="Password"
					  onChange={(e) => this.handlePassword(e)}
	              InputProps={{
	                startAdornment: <InputAdornment position="start">
	                  <PasswordIcon />
	                </InputAdornment>
	              }}
	              error={!this.validatePassword()}
	              helperText={this.validatePassword() ? "" : "Atleast 8 Characters"}
	            />
		         <div className="buttons">
		         	<Button onClick={() => this.handleSubmit()} variant="contained" component="span">
		         		Register
		         	</Button>
		         </div>
			</div>	
		)
	}
}

export default RegisterComponent;