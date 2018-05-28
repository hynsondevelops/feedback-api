import React, { Component } from 'react';
import { Link } from 'react-router-dom'


let axios = require('axios');

class IndexMcmTopics extends Component {
	constructor(props) {
		super(props);

		let axiosClient = axios.create({
		  baseURL: 'http://localhost:3000',
		  headers: {'Authorization': this.props.match.params.auth_token}
		});
		this.axiosClient = axiosClient
		let auth_token = "";


		this.state = {
			mcm_topics: [{
			  id: null,
			  name: '',
			  user_id: this.props.match.params.user_id,
			  errors: {},
			  sentence_scores_attributes: [Object.assign({}, this.emptySentenceScore)]
			}],
			auth_token: this.props.match.params.auth_token,
			time_to_redirect: false
		};
	}


	componentWillMount() {
		let axiosClient = axios.create({
		  baseURL: 'http://localhost:3000',
		  headers: {'Authorization': this.props.match.params.auth_token}
		});
	  
	    axiosClient
	      .get(`/mcm_topics`)
	      .then(response => {
	      	console.log(response)
	      	let mcm_topics_JSON = response.data

	      	for (let i = 0; i < mcm_topics_JSON.length; i++) {
		      	let mcm_topic_formatted = {name: mcm_topics_JSON[i].name, user_id: mcm_topics_JSON[i].user_id, sentence_scores_attributes: [], errors: {}, id: mcm_topics_JSON[i].id}
		      	for (let j = 0; j < mcm_topics_JSON[j].sentence_scores.length; j++) {
		      		console.log("Sentence")
		      		console.log(mcm_topics_JSON[j].sentence_scores[j].sentence)
		      		mcm_topic_formatted.sentence_scores_attributes.push({sentence: mcm_topics_JSON[j].sentence_scores[j].sentence, score: mcm_topics_JSON[j].sentence_scores[j].score, id: mcm_topics_JSON[j].sentence_scores[j].id, _destroy: false})
		      	}
	      		console.log(mcm_topic_formatted)
	      		this.setState({ mcm_topic: mcm_topic_formatted});

	      	}
	      })
	      .catch(error => {
	      	this.setState({time_to_redirect: true})
	      	});
	  
	}


	render() {
		return (
			<Link to={"/mcm_topics/" + 9 + "/edit/" + this.state.auth_token + "/" + this.state.user_id}>Hello</Link>
		)
	}

}

export default IndexMcmTopics;
