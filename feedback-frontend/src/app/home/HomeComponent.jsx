import React from 'react';
import LoginContainer from './LoginContainer';
import {Link} from 'react-router-dom'

function HomeComponent({
  token,
  email
}) {
	if (token!=null) {
		return (
			<div>
				<h3> Welcome, {email} </h3>
				<Link to="/mcm_feedback_generator">MCM Generator</Link> // action updates location state + changes address bar
				<Link to="/mcm_topics">MCM Topics</Link> // action updates location state + changes address bar
				<Link to="/mcm_topics/new">New MCM Topic</Link> // action updates location state + changes address bar
				<Link to="/mcm_topics/9/edit">Edit MCM Topic #1</Link> // action updates location state + changes address bar
				<Link to="/student_gen">MCM Generator</Link> // action updates location state + changes address bar
				<Link to="/student_levels">Student Levels</Link> // action updates location state + changes address bar
				<Link to="/student_levels/new">New Student Level</Link> // action updates location state + changes address bar
				<Link to="/student_levels/1/edit">Edit Student Level #1</Link> // action updates location state + changes address bar
			</div>
		)
	}
	else {
	  return (
	    <div>
	      <h3>Welcome to Feedback Forms</h3>
	      <LoginContainer/>
	    </div>
	  )
	}
}

export default HomeComponent;