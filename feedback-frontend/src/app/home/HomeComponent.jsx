import React from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';
import Button from '@material-ui/core/Button';

//MCM Topic Buttons
import McmFeedbackGeneratorLink from '../common/buttons/McmFeedbackGeneratorLink'
import McmTopicIndexLink from '../common/buttons/McmTopicIndexLink'
import McmTopicNewLink from '../common/buttons/McmTopicNewLink'
import McmTopicEditLink from '../common/buttons/McmTopicEditLink'

//Student Level Buttons
import StudentFeedbackGeneratorLink from '../common/buttons/StudentFeedbackGeneratorLink'
import StudentLevelIndexLink from '../common/buttons/StudentLevelIndexLink'
import StudentLevelNewLink from '../common/buttons/StudentLevelNewLink'
import StudentLevelEditLink from '../common/buttons/StudentLevelEditLink'
import Grid from '@material-ui/core/Grid';


//Cards
import McmCard from './McmCard.jsx'
import StudentCard from './StudentCard.jsx'


import {Link} from 'react-router-dom'

function HomeComponent({
  token,
  email
}) {
	if (token!=null) {
		return (
			<div>
				<h3> Welcome, {email} </h3>
				<Grid container spacing={12}>
					<Grid item xs={6}>		
						<McmCard />
					</Grid>
					<Grid item xs={6}>		
						<StudentCard />
					</Grid>
				</Grid>
			</div>
		)
	}
	else {
	  return (
	    <div>
	      <h3>Welcome to Feedback Forms</h3>
	      <Grid container spacing={12}>
	      	<Grid item xs={6}>		
	      		<LoginContainer/>
	      	</Grid>
	      	<Grid item xs={6}>		
	      		<RegisterContainer/>
	      	</Grid>
	      </Grid>
	    </div>
	  )
	}
}

export default HomeComponent;