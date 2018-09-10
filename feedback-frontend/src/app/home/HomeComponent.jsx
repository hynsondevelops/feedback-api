import React from 'react';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';
import Button from '@material-ui/core/Button';
import './styles.scss';
import '../common/styles.scss';


import GifPlayer from './GifPlayer'
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

//Images
import feedbackPic from "./feedback-2800867.png"
import studentGif from './Student.gif'
import mcmGif from './Mcm.gif'
import studentStill from './Student.png'
import mcmStill from './Mcm.png'


//Icons
import GeneratorIcon from '@material-ui/icons/Build';
import ListIcon from '@material-ui/icons/List';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import StudentIcon from '@material-ui/icons/ChildCare';


import {Link} from 'react-router-dom'

function HomeComponent({
  token,
  email
}) {
	if (token!=null) {
		return (
			<div>
				<Grid className="masthead" container spacing={12}>
					<Grid item xs={12}>
						<h3 className="masthead__title"> Feedback Friend </h3>
					</Grid>
					<Grid item xs={3}>
						<p className="masthead__text"> Student and mock class feedback made easy. </p>
					</Grid>

				</Grid>
				<Grid container className="vertical-section-box" spacing={12}>
					<Grid item xs={3} className="centered-text">
						<GeneratorIcon />
						<h3> Generate Feedback </h3>
						<p className="action-text"> Generate student feedback from sentence banks. Create templates for different student levels. Generate mock class mentor feedback from scoring rubic and sentence banks. </p>
					</Grid>
					<Grid item xs={3} className="centered-text">
						<AddBoxIcon />
						<h3> Add Feedback </h3>
						<p className="action-text"> Add student levels with preformatted text and random sentences. Add mock class mentor topics and scoring for each topic with corresponding sentences. </p>
					</Grid>
					<Grid item xs={3} className="centered-text">
						<ListIcon />
						<h3> View Feedback </h3>
						<p className="action-text"> View all student levels with preformatted text and random sentences through index page. View mock class mentor topics and sentence scores through index page. </p>
					</Grid>
					<Grid item xs={3} className="centered-text">
						<EditIcon />
						<h3> Edit Feedback </h3>
						<p className="action-text"> Edit all student levels and mock class mentor topics. You have full control over all data. </p>
					</Grid>
				</Grid>
				<Grid container className="vertical-section-box" spacing={12}>
					<Grid item xs={6} >
						<GifPlayer gif={studentGif} still={studentStill} caption="Student feedback demo"/>

					</Grid>
					<Grid item xs={6} >
						<div className="feature-box">
							<p className="feature-box__text" >
								<h2 >Student Level Feedback</h2>
								 Student levels allow for complete customization with both preformatted text and sentence banks. All new accounts are given example student levels that can be edited or added to. Student name replacement can be utilized by typing name in any sentence where you would like the student's name to be. Introduction and conclusion sentence defaults are available and can also be changed. Gender of the student can be selected. Typing He will be changed to She when generated if female is selected. 
							 </p>
						</div>
					</Grid>
				</Grid>
				<Grid container className="vertical-section-box" spacing={12}>
					<Grid item xs={6} >
						<div className="feature-box">
							<p className="feature-box__text" >
								<h2>Mock Class Mentor Feedback</h2>
								 Mock class mentor topics allow for teacher feedback to be generated using a rubick. Mock class mentor feedback is seperated into good feedback and improvement feedback. Introduction and conclusion sentence defaults are availabale and can also be changed. Any amount of the mock class mentor topics can be included in the generator feedback. Those topics with a selected score will be included and all others not.
							 </p>
						</div>
					</Grid>
					<Grid item xs={6} >
						<GifPlayer gif={mcmGif} still={mcmStill} caption="Mock class mentor feedback demo"/>
					</Grid>
				</Grid>
			</div>
		)
	}
	else {
	  return (
	    <div >
	    	<div>
	    		<Grid className="masthead" container spacing={12}>
	    			<Grid item xs={12}>
	    				<h3 className="masthead__title"> Feedback Friend </h3>
	    			</Grid>
	    			<Grid item xs={3}>
	    				<p className="masthead__text"> Student and mock class feedback made easy. </p>
	    				<Link to="/login" className="masthead__button-text">
	    				  <Button variant="contained" color="secondary">Try it now free!</Button>
	    				</Link>
	    			</Grid>
	    		</Grid>
	    		<Grid container className="vertical-section-box" spacing={12}>
	    			<Grid item xs={3} className="centered-text">
	    				<GeneratorIcon />
	    				<h3> Generate Feedback </h3>
	    				<p className="action-text"> Generate student feedback from sentence banks. Create templates for different student levels. Generate mock class mentor feedback from scoring rubic and sentence banks. </p>
	    			</Grid>
	    			<Grid item xs={3} className="centered-text">
	    				<AddBoxIcon />
	    				<h3> Add Feedback </h3>
	    				<p className="action-text"> Add student levels with preformatted text and random sentences. Add mock class mentor topics and scoring for each topic with corresponding sentences. </p>
	    			</Grid>
	    			<Grid item xs={3} className="centered-text">
	    				<ListIcon />
	    				<h3> View Feedback </h3>
	    				<p className="action-text"> View all student levels with preformatted text and random sentences through index page. View mock class mentor topics and sentence scores through index page. </p>
	    			</Grid>
	    			<Grid item xs={3} className="centered-text">
	    				<EditIcon />
	    				<h3> Edit Feedback </h3>
	    				<p className="action-text"> Edit all student levels and mock class mentor topics. You have full control over all data. </p>
	    			</Grid>
	    		</Grid>
	    		<Grid container className="vertical-section-box" spacing={12}>
	    			<Grid item xs={6} >
	    				<GifPlayer gif={studentGif} still={studentStill} caption="Student feedback demo"/>

	    			</Grid>
	    			<Grid item xs={6} >
	    				<div className="feature-box">
	    					<p className="feature-box__text" >
	    						<h2 >Student Level Feedback</h2>
	    						 Student levels allow for complete customization with both preformatted text and sentence banks. All new accounts are given example student levels that can be edited or added to. Student name replacement can be utilized by typing name in any sentence where you would like the student's name to be. Introduction and conclusion sentence defaults are available and can also be changed. Gender of the student can be selected. Typing He will be changed to She when generated if female is selected. 
	    					 </p>
	    				</div>
	    			</Grid>
	    		</Grid>
	    		<Grid container className="vertical-section-box" spacing={12}>
	    			<Grid item xs={6} >
	    				<div className="feature-box">
	    					<p className="feature-box__text" >
	    						<h2>Mock Class Mentor Feedback</h2>
	    						 Mock class mentor topics allow for teacher feedback to be generated using a rubick. Mock class mentor feedback is seperated into good feedback and improvement feedback. Introduction and conclusion sentence defaults are availabale and can also be changed. Any amount of the mock class mentor topics can be included in the generator feedback. Those topics with a selected score will be included and all others not.
	    					 </p>
	    				</div>
	    			</Grid>
	    			<Grid item xs={6} >
	    				<GifPlayer gif={mcmGif} still={mcmStill} caption="Mock class mentor feedback demo"/>
	    			</Grid>
	    		</Grid>
	    	</div>
	    </div>
	  )
	}
}

export default HomeComponent;