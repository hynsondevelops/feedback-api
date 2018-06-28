import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function McmFeedbackGeneratorLink({
}) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to="/mcm_feedback_generator">
				<Button variant="contained" color="primary">
					MCM Feedback Generator
				</Button>
			</Link>	
		</div>
	)
}

export default McmFeedbackGeneratorLink;