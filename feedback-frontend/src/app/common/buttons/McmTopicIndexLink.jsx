import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function McmTopicIndexLink({
}) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to="/mcm_topics">
				<Button variant="contained" color="primary">
					Mcm Topics
				</Button>
			</Link> 
		</div>
	)
}

export default McmTopicIndexLink;