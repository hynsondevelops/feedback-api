import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function StudentLevelEditLink({
	student_level
}) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to={`/student_levels/${student_level.id}/edit`} key={student_level.id}>
				<Button variant="contained" color="primary">
					Edit
				</Button>
			</Link>
		</div>
	)
}

export default StudentLevelEditLink;