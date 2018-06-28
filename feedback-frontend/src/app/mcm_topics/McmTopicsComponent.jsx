import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link, withRouter} from 'react-router-dom'
import McmTopicEditLink from '../common/buttons/McmTopicEditLink'
import McmTopicCard from '../common/McmTopicCard'
import Grid from '@material-ui/core/Grid';


class McmTopicsComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getMcmIndex(this.props.token)
	}


	render() {
		console.log(this.props.mcm_index)
		if (this.props.mcm_index != undefined) {
			return (
				<div>
					<h3> Mcm Topics </h3>
					<Grid container spacing={12}>
						{this.props.mcm_index.map(mcm_topic => (
						<Grid item xs={3} style={{margin: "10px 1.5%"}}> 		
	                    	<McmTopicCard mcm_topic={mcm_topic} />
	                    </Grid>
                    ))}
					</Grid>

				</div>	
			)
		}
		else {
			return (<h3> Loading </h3>)
		}
	}

}

export default withRouter(McmTopicsComponent);

