import React, { Component } from 'react';
import axiosClient from '../../axiosClient.js';
import Link from 'redux-first-router-link'
import {authenticateUser, emailFormChange, passwordFormChange} from '../../actions/actions.js'
import store from '../../store/configureStore'

class UserLogIn extends Component {
  constructor(props) {
  	super(props);
    console.log(props)
  	this.state = {
	  auth_token: null,
	  errors: {},
  	};
  }


  render() {
    let reduxState = store.getState()
    console.log("Render")
    console.log(store.getState())
  	if (this.props.auth_info.token == null) {
	    return (
	      <div className="McmTopicForm">
	        <form>
	          <div className="form-group">
	            <label>Name</label>
	            <input
	              type="text"
	              onChange={e => this.handleEmailChange(e)}
	              value={reduxState.auth_info.email}
	              className="form-control" />
	            <input
	              type="password"
	              onChange={e => this.handlePasswordChange(e)}
	              value={reduxState.auth_info.password}
	              className="form-control" />
	          </div>
	          <hr />
	          <br />
            <span onClick={this.handleFormSubmit}>Save</span>

	          <button
	            onClick={e=> this.handleFormSubmit(e)}
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
  		return (
        <div>
        <h3> Success! </h3>
        {this.props.auth_info.email}
        <Link to="/user/123">User 123</Link> // action updates location state + changes address bar

        
        </div>

      )

  	}
  }

  handleFormSubmit = ()  => {
    console.log(this)
    let reduxState = store.getState()
    store.dispatch(authenticateUser(reduxState.auth_info.email, reduxState.auth_info.password))
   //  console.log("button")
  	// let url = "/authenticate"
   //  axiosClient
   //    ["post"](url, {
   //      email: this.state.email,
   //      password: this.state.password
   //    })
   //    .then(response => {
   //      console.log(response.data)
   //    	this.setState({auth_token: response.data.auth_token, user_id: response.data.user_id})
   //    })
   //    .catch(error => {
   //      console.log(error)
   //      this.setState({ user: error.response.data });
   //    });
  }


  handleEmailChange(e) {
    store.dispatch(emailFormChange(e.target.value))
    /*
    let user = this.state;
    user.email = e.target.value;
    this.setState({ user: this.state });
    */
  }

  handlePasswordChange(e) {
    store.dispatch(passwordFormChange(e.target.value))

    /*
    let user = this.state;
    user.password = e.target.value;
    this.setState({ user: this.state });
    */
  }



}

export default UserLogIn;