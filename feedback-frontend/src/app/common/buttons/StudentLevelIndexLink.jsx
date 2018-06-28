import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function StudentLevelIndexLink({
}) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to="/student_levels">
				<Button variant="contained" color="primary">
					Student Levels
				</Button>
			</Link>	
		</div>
	)
}

export default StudentLevelIndexLink;