import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function StudentLevelNewLink({
}) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to="/student_level_feedback_generator">
				<Button variant="contained" color="primary">
					New Student Level
				</Button>
			</Link> 
		</div>
	)
}

export default StudentLevelNewLink;