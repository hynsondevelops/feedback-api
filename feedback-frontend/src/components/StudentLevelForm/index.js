import React, { Component } from 'react';
import { Redirect } from 'react-router'

let axios = require('axios');

class StudentLevelForm extends Component {
	constructor(props) {
		super(props);
		this.emptyRandomSentence = {
			sentence: '',
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
			student_level: {
			  id: null,
			  name: '',
			  generic_text: '',
			  user_id: 1,
			  errors: {},
			  random_sentences_attributes: [Object.assign({}, this.emptyRandomSentence)]
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
	      .get(`/student_levels/${this.props.match.params.id}`)
	      .then(response => {
	      	console.log(response)
	      	let student_level_JSON = response.data
	      	let student_level_formatted = {name: student_level_JSON.name, generic_text: student_level_JSON.generic_text, user_id: student_level_JSON.user_id, random_sentences_attributes: [], errors: {}, id: student_level_JSON.id}
	      	for (let i = 0; i < student_level_JSON.random_sentences.length; i++) {
	      		student_level_formatted.random_sentences_attributes.push({sentence: student_level_JSON.random_sentences[i].sentence, id: student_level_JSON.random_sentences[i].id, _destroy: false})
	      	}
	      	console.log(student_level_formatted)
	        this.setState({ student_level: student_level_formatted});
	      });
	  }
	}


	render() {
		if (this.state.time_to_redirect)
		{
			let url = '/student_levels/new/' + this.state.auth_token
			return (<Redirect to={url}/>)
		}
	  return (
	    <div className="StudentLevelForm">
	      <form>
	        <div className="form-group">
	          <label>Name</label>
	          <input
	            type="text"
	            onChange={e => this.handleStudentLevelNameChange(e)}
	            value={this.state.student_level.name}
	            className="form-control" />
	            <label>Generic</label>
	            <input
	              type="text"
	              onChange={e => this.handleStudentLevelGenericTextChange(e)}
	              value={this.state.student_level.generic_text}
	              className="form-control" />
	        </div>
	        <hr />
	        <div className="sentence-scores-fieldset">
	          <h3>Sentence Scores</h3>
	          {this.renderRandomSentencesForm()}
	          <button
	            className="btn btn-success"
	            onClick={e => this.handleAddRandomSentence()}>
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

	renderRandomSentencesForm() {
	  let counter = 0;
	  console.log(this.state.student_level)
	  return this.state.student_level.random_sentences_attributes.map((random_sentence, index) => {
	    if (random_sentence._destroy === false) {
	      let sentenceScoreDOM = (
	        <div className="sentence-score-form" key={index}>
	          <div className="form-group">
	            <div className="clearfix" style={{ marginBottom: 5 }}>
	              <label>
	                random_sentence {counter + 1}
	              </label>
	              <button
	                className="btn btn-danger"
	                style={{ padding: '5px 10px', float: 'right' }}
	                onClick={e => this.handleRemoveRandomSentence(random_sentence)}>
	                X
	              </button>
	            </div>
	            <input
	              placeholder="Sentence"
	              onChange={event => this.onRandomSentenceSentenceChange(event, random_sentence)}
	              type="text"
	              value={random_sentence.sentence}
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

	renderStudentLevelNameInlineError() {
	  if (this.state.student_level.errors.name) {
	    return (
	      <div className="inline-error alert alert-danger">
	        {this.state.student_level.errors.name.join(', ')}
	      </div>
	    );
	  } else {
	    return null;
	  }
	}

	renderRandomSentenceInlineError(random_sentence) {
	  if (random_sentence.errors.title) {
	    return (
	      <div className="inline-error alert alert-danger">
	        {random_sentence.errors.title.join(', ')}
	      </div>
	    );
	  } 
	  else {
	    return null;
	  }
	}


	onRandomSentenceSentenceChange(event, random_sentence) {
	  random_sentence.sentence = event.target.value;
	  this.setState({ student_level: this.state.student_level });
	}


	handleFormSubmit() {
		console.log(this.props.auth_token)
	  let submitMethod = this.state.student_level.id ? 'patch' : 'post';
	  let url = this.state.student_level.id
	    ? `/student_levels/${this.state.student_level.id}.json`
	    : '/student_levels.json';
	  let student_level_data = this.state.student_level
	  student_level_data.errors = undefined
	  for (let i = 0; i < student_level_data.random_sentences_attributes.length; i++) {
	  	student_level_data.random_sentences_attributes[i].errors = undefined
	  }
	  this.axiosClient
	  	[submitMethod](url,
	      {student_level: student_level_data}, 
	    )
	    .then(response => {
	    	//this.setState({time_to_redirect: true})
	    })
	    .catch(error => {
	      this.setState({ student_level: error.response.data });
	    });
	}


	handleCancel() {
	  this.props.history.push('/student_levels');
	}


	handleAddRandomSentence() {
		console.log("handle add")
	  this.state.student_level.random_sentences_attributes.push(Object.assign({}, this.emptyRandomSentence));
	  this.setState({ student_level: this.state.student_level });
	  console.log("post set state")
	}


	handleRemoveRandomSentence(random_sentence) {
	  random_sentence._destroy = true;
	  this.setState({ student_level: this.state.student_level });
	}

	handleStudentLevelNameChange(e) {
	  let student_level = this.state.student_level;
	  student_level.name = e.target.value;
	  this.setState({ student_level: this.state.student_level });
	}

	handleStudentLevelGenericTextChange(e) {
	  let student_level = this.state.student_level;
	  student_level.generic_text = e.target.value;
	  this.setState({ student_level: this.state.student_level });
	}


}

export default StudentLevelForm;
