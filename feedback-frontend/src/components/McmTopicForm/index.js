import React, { Component } from 'react';
import { Redirect } from 'react-router'

let axios = require('axios');

class McmTopicForm extends Component {
	constructor(props) {
		super(props);
		this.emptySentenceScore = {
			sentence: '',
			score: '',
			id: null,
			errors: {},
			_destroy: false
		};

		let axiosClient = axios.create({
		  baseURL: 'http://localhost:3000',
		  headers: {'Authorization': this.props.match.params.auth_token}
		});
		this.axiosClient = axiosClient
		let auth_token = "";


		this.state = {
			mcm_topic: {
			  id: null,
			  name: '',
			  user_id: this.props.match.params.user_id,
			  errors: {},
			  sentence_scores_attributes: [Object.assign({}, this.emptySentenceScore)]
			},
			auth_token: this.props.match.params.auth_token,
			time_to_redirect: false
		};
	}

	componentWillMount() {
		console.log("componentWillMount")
		console.log(this.props.match.params.auth_token)
		console.log(this.axiosClient)
		let axiosClient = axios.create({
		  baseURL: 'http://localhost:3000',
		  headers: {'Authorization': this.props.match.params.auth_token}
		});
	  if (this.props.match.params.id) {
	    axiosClient
	      .get(`/mcm_topics/${this.props.match.params.id}`)
	      .then(response => {
	      	console.log(response)
	      	let mcm_topic_JSON = response.data
	      	let mcm_topic_formatted = {name: mcm_topic_JSON.name, user_id: mcm_topic_JSON.user_id, sentence_scores_attributes: [], errors: {}, id: mcm_topic_JSON.id}
	      	for (let i = 0; i < mcm_topic_JSON.sentence_scores.length; i++) {
	      		console.log("Sentence")
	      		console.log(mcm_topic_JSON.sentence_scores[i].sentence)
	      		mcm_topic_formatted.sentence_scores_attributes.push({sentence: mcm_topic_JSON.sentence_scores[i].sentence, score: mcm_topic_JSON.sentence_scores[i].score, id: mcm_topic_JSON.sentence_scores[i].id, _destroy: false})
	      	}
	      	console.log(mcm_topic_formatted)
	        this.setState({ mcm_topic: mcm_topic_formatted});
	      })
	      .catch(error => {
	      	this.setState({time_to_redirect: true})
	      	});
	  }
	}


	render() {
		if (this.state.time_to_redirect)
		{
			let url = '/mcm_topics/new/' + this.state.auth_token
			return (<Redirect to={url}/>)
		}
		else {
		  return (
		    <div className="McmTopicForm">
		      <form>
		        <div className="form-group">
		          <label>Name</label>
		          <input
		            type="text"
		            onChange={e => this.handleMcmTopicNameChange(e)}
		            value={this.state.mcm_topic.name}
		            className="form-control" />
		        </div>
		        <hr />
		        <div className="sentence-scores-fieldset">
		          <h3>Sentence Scores</h3>
		          {this.renderSentenceScoresForm()}
		          <button
		            className="btn btn-success"
		            onClick={e => this.handleAddSentenceScore()}>
		            + Add Sentence Score
		          </button>
		        </div>
		        <br />
		        <button
		          onClick={e => this.handleFormSubmit()}
		          className="btn btn-primary">
		          Save
		        </button>
		        &nbsp;
		        <button
		          onClick={e => this.handleCancel()}
		          className="btn btn-default">
		          Cancel
		        </button>{' '}
		      </form>
		    </div>
		  );
		}
	}

	renderSentenceScoresForm() {
	  let counter = 0;
	  console.log(this.state.mcm_topic)
	  return this.state.mcm_topic.sentence_scores_attributes.map((sentence_score, index) => {
	    if (sentence_score._destroy === false) {
	      let sentenceScoreDOM = (
	        <div className="sentence-score-form" key={index}>
	          <div className="form-group">
	            <div className="clearfix" style={{ marginBottom: 5 }}>
	              <label>
	                sentence_score {counter + 1}
	              </label>
	              <button
	                className="btn btn-danger"
	                style={{ padding: '5px 10px', float: 'right' }}
	                onClick={e => this.handleRemoveSentenceScore(sentence_score)}>
	                X
	              </button>
	            </div>
	            <input
	              placeholder="Score"
	              onChange={event => this.onSentenceScoreScoreChange(event, sentence_score)}
	              type="text"
	              value={sentence_score.score}
	              className="form-control"/>
	            <input
	              placeholder="Sentence"
	              onChange={event => this.onSentenceScoreSentenceChange(event, sentence_score)}
	              type="text"
	              value={sentence_score.sentence}
	              className="form-control"/>
	          </div>
	        </div>
	      );
	      counter++;

	      return sentenceScoreDOM;
	    } 
	    else {
	      return null;
	    }
	  });
	}

	renderMcmTopicNameInlineError() {
	  if (this.state.mcm_topic.errors.name) {
	    return (
	      <div className="inline-error alert alert-danger">
	        {this.state.mcm_topic.errors.name.join(', ')}
	      </div>
	    );
	  } else {
	    return null;
	  }
	}

	renderSentenceScoreInlineError(sentence_score) {
	  if (sentence_score.errors.title) {
	    return (
	      <div className="inline-error alert alert-danger">
	        {sentence_score.errors.title.join(', ')}
	      </div>
	    );
	  } 
	  else {
	    return null;
	  }
	}


	onSentenceScoreSentenceChange(event, sentence_score) {
	  sentence_score.sentence = event.target.value;
	  this.setState({ mcm_topic: this.state.mcm_topic });
	}

	onSentenceScoreScoreChange(event, sentence_score) {
	  sentence_score.score = event.target.value;
	  this.setState({ mcm_topic: this.state.mcm_topic });
	}

	handleFormSubmit() {
		console.log(this.props.auth_token)
	  let submitMethod = this.state.mcm_topic.id ? 'patch' : 'post';
	  let url = this.state.mcm_topic.id
	    ? `/mcm_topics/${this.state.mcm_topic.id}.json`
	    : '/mcm_topics.json';
	  let mcm_topic_data = this.state.mcm_topic
	  mcm_topic_data.errors = undefined
	  for (let i = 0; i < mcm_topic_data.sentence_scores_attributes.length; i++) {
	  	mcm_topic_data.sentence_scores_attributes[i].errors = undefined
	  }
	  this.axiosClient
	  	[submitMethod](url,
	      {mcm_topic: mcm_topic_data}, 
	    )
	    .then(response => {
	      this.props.history.push('/mcm_topics');
	    })
	    .catch(error => {
	      this.setState({ mcm_topic: error.response.data });
	    });
	}


	handleCancel() {
	  this.props.history.push('/mcm_topics');
	}


	handleAddSentenceScore() {
		console.log("handle add")
	  this.state.mcm_topic.sentence_scores_attributes.push(Object.assign({}, this.emptySentenceScore));
	  this.setState({ mcm_topic: this.state.mcm_topic });
	  console.log("post set state")
	}


	handleRemoveSentenceScore(sentence_score) {
	  sentence_score._destroy = true;
	  this.setState({ mcm_topic: this.state.mcm_topic });
	}

	handleMcmTopicNameChange(e) {
	  let mcm_topic = this.state.mcm_topic;
	  mcm_topic.name = e.target.value;
	  this.setState({ mcm_topic: this.state.mcm_topic });
	}


}

export default McmTopicForm;
