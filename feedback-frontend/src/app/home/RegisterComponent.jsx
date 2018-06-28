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

function RegisterComponent({
	handleRegister,
}) {
	return (
		<div>
			<h3> Register </h3>
			<FormControl>
		        <Input
		          id="email-register"
  				  name="email"
  				  component="input"
  				  type="email"
  				  placeholder="Email"
		          startAdornment={
		            <InputAdornment position="start">
		              <AccountCircle />
		            </InputAdornment>
		          }
		        />
		     </FormControl>
		     <br/>
	    	<FormControl>
	            <Input
	              id="password-register"
  				  name="password"
  				  component="input"
  				  type="password"
  				  placeholder="Password"
	              startAdornment={
	                <InputAdornment position="start">
	                  <PasswordIcon />
	                </InputAdornment>
	              }
	            />
	         </FormControl>
	         <div className="buttons">
	         	<Button onClick={() => handleRegister(document.getElementById("email-register").value, document.getElementById("password-register").value)} variant="contained" component="span">
	         		Log In
	         	</Button>
	         </div>
		</div>	
	)
}

export default RegisterComponent;