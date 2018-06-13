import React from 'react';
import Link from 'redux-first-router-link'


function McmFeedbackGeneratorComponent({
  token,
  email
}) {
	if (token!=null) {
		return (
			<div>
				<h3> Welcome, {email} </h3>
				<Link to="/home">McmFeedbackGenerator</Link> // action updates location state + changes address bar
			</div>
		)
	}
	else {
	  return (
	    <div>
	      <h3>Welcome to Feedback Forms</h3>
	    </div>
	  )
	}
}

export default McmFeedbackGeneratorComponent;