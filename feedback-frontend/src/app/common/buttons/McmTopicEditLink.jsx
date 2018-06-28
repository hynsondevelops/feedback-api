import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

function McmTopicEditLink({
	mcm_topic
}) {
	return (
		<div>
			<Link style={{ textDecoration: 'none' }} to={`/mcm_topics/${mcm_topic.id}/edit`} key={mcm_topic.id}>
				<Button variant="contained" color="primary">
					Edit
				</Button>
			</Link>	
		</div>
	)
}

export default McmTopicEditLink;