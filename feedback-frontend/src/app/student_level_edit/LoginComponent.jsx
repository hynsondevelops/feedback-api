import React from 'react';
import { Form, Field } from 'react-final-form'

function LoginComponent({
	handleLogin,
}) {
	return (
		<div>
			<h3> Login </h3>
			<div>
				<label>Email</label>
				<input
				  id="email"
				  name="email"
				  component="input"
				  type="email"
				  placeholder="Email"
				/>
			</div>
			<div>
				<label>Password</label>
				<input
				  id="password"
				  name="password"
				  component="input"
				  type="password"
				  placeholder="Password"
				/>
			</div>

			<div className="buttons">
				<button onClick={() => handleLogin(document.getElementById("email").value, document.getElementById("password").value)}>
				  Submit
				</button>
			</div>
		</div>	
	)
}

export default LoginComponent;