import React, { Component } from 'react';
import axiosClient from '../axiosClient';
import NewMcmTopic from '../NewMcmTopic';
import NewStudentLevel from '../NewStudentLevel';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import EditMcmTopic from '../EditMcmTopic';
import EditStudentLevel from '../EditStudentLevel';

import Test from '../Test';
import { Link } from 'react-router-dom'


class UserLogIn extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
	  email: 'hynsondevelop@gmail.com',
	  password: 'password23',
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
  		return (
        <div>
        <h3> Success! </h3>
        <Link to={{pathname: "/mcm_topics/new/" + this.state.auth_token + "/" + this.state.user_id, state: {auth_token: this.state.auth_token}}}>New MCM Topic</Link>
        <Link to={{pathname: "/mcm_topics/9/edit/" + this.state.auth_token, state: {auth_token: this.state.auth_token}}}>Edit Mcm Topic</Link>
        <Link to={{pathname: "/student_levels/new/" + this.state.auth_token + "/" + this.state.user_id, state: {auth_token: this.state.auth_token}}}>New Student Level</Link>
        <Link to={{pathname: "/student_levels/2/edit/" + this.state.auth_token, state: {auth_token: this.state.auth_token}}}>Edit Student Level</Link>

        <Router history={this.props.history}>
          <Switch>
            <Route exact path="/test" component={Test} />
            <Route path="/mcm_topics/new/:auth_token/:user_id" component={NewMcmTopic} />
            <Route path="/mcm_topics/:id/edit/:auth_token" component={EditMcmTopic} />
            <Route path="/student_levels/new/:auth_token/:user_id" component={NewStudentLevel} />
            <Route path="/student_levels/:id/edit/:auth_token" component={EditStudentLevel} />


          </Switch>
        </Router>
        </div>

      )

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
      	this.setState({auth_token: response.data.auth_token, user_id: response.data.user_id})
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