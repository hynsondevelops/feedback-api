import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function McmTopicNewLink({
}) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to="/mcm_topics/new">
				<Button variant="contained" color="primary">
					New MCM Topic
				</Button>
			</Link> 
		</div>
	)
}

export default McmTopicNewLink;