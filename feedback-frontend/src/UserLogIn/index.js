import React, { Component } from 'react';
import axiosClient from '../axiosClient';

class UserLogIn extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
	  email: '',
	  password: '',
	  auth_token: null,
	  errors: {},
  	};
  }


  render() {
  	if (this.state.auth_token == null) {
	    return (
	      <div className="McmTopicForm">
	        <form>
	          <div className="form-group">
	            <label>Name</label>
	            <input
	              type="text"
	              onChange={e => this.handleEmailChange(e)}
	              value={this.state.email}
	              className="form-control" />
	            <input
	              type="password"
	              onChange={e => this.handlePasswordChange(e)}
	              value={this.state.password}
	              className="form-control" />
	          </div>
	          <hr />
	          <br />
	          <button
	            onClick={e => this.handleFormSubmit()}
	            className="btn btn-primary">
	            Save
	          </button>
	          &nbsp;
	          <button
	            onClick={e => this.handleCancel()}
	            className="btn btn-default">
	            Cancel
	          </button>{' '}
	        </form>
	      </div>
        )  		
  	}
  	else {
  		return (<h3> Success! </h3>)
  	}
  }

  handleFormSubmit() {
  	let url = "/authenticate"
    axiosClient
      ["post"](url, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
      	console.log(response.data)
      	this.setState({auth_token: response.data.auth_token})
      })
      .catch(error => {
        this.setState({ user: error.response.data });
      });
  }


  handleEmailChange(e) {
    let user = this.state;
    user.email = e.target.value;
    this.setState({ user: this.state });
  }

  handlePasswordChange(e) {
    let user = this.state;
    user.password = e.target.value;
    this.setState({ user: this.state });
  }



}

export default UserLogIn;