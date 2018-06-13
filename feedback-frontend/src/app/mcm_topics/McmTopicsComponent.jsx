import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link} from 'react-router-dom'


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
			const mcm_topics = this.props.mcm_index.map(mcm_topic =>
				`${mcm_topic.sentence_scores[0].score}: ${mcm_topic.sentence_scores[0].sentence} `  
			)
			return (
				<div>
					{mcm_topics}
					<h3> Mcm Topics </h3>
					{}
					<h3> Sentence Scores </h3>
					{}
					{this.props.mcm_index.map(mcm_topic => (
                      <Link to={`/mcm_topics/${mcm_topic.id}`} key={mcm_topic.id}>{mcm_topic.name}</Link>

                    ))}
				</div>	
			)
		}
		else {
			return (<h3> Loading </h3>)
		}
	}

}

export default McmTopicsComponent;

