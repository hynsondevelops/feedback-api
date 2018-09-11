import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles.scss'
import '../common/styles.scss'

class StudentLevelEditComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getStudentLevel(this.props.token, this.props.match.params.id)
	}


	sentencePresence() {
		let atleastOneSentence = false
		let emptySentence = false
		for (let i = 0; i < this.props.student_level.random_sentences_attributes.length; i++) {
			let curSentence = document.getElementById("sentence-"+ i)
			if (curSentence) {
				atleastOneSentence = true
				if (JSON.parse(curSentence.getAttribute("aria-invalid"))) { //error
					emptySentence = true
				}
			}
		}
		if (!atleastOneSentence) {
			return "\nMust have atleast (1) sentence."
		}
		else if (emptySentence) {
			return "\nMust have sentence content." 
		}
		else {
			return "" 
		}
	}


	formSubmit(e) {
		let errors = ""
		let noName = JSON.parse(document.getElementById("student_level_name").getAttribute("aria-invalid"))
		let noText = JSON.parse(document.getElementById("student_level_text").getAttribute("aria-invalid"))

		errors += this.sentencePresence()
		if (noName) {
			errors += "\nMust have a name."
		}

		if (noText) {
			errors += "\nMust have generic text."
		}

		if (errors == "") { //no errors
			this.props.updateStudentLevel(e, this.props.token, this.props.student_level)		}
		else { //errors
			alert(errors)
		}
	}

	renderRandomSentences() {
		let counter = 0;
		return this.props.student_level.random_sentences_attributes.map((random_sentence, index) => {
		  if (random_sentence._destroy === false) {
		    let randomSentenceDOM = (
		      <div className="random-sentence-form" key={index}>
		        <div className="form-group">
		          <div className="clearfix" >
		            <button
		              type="button"
		              className="btn btn-danger x-btn"
		              data-level={JSON.stringify(this.props.student_level)}
		              data-sentence_index={index}
		              onClick={this.props.removeSentence}>
		              X
		            </button>
		          </div>
		          <div className="sentence-field">
			          <TextField
			          	label="Sentence"
			            placeholder="Sentence"
			            onChange={(e) => {this.props.updateSentence(e, index, this.props.student_level); this.forceUpdate()}}
			            type="text"
			            value={random_sentence.sentence}
			            className="form-control sentence-field"
			            id={"sentence-" + index}
			            multiline
			            error={random_sentence.sentence == ""}
			            helperText={random_sentence.sentence == "" ? "Required" : "" }
			            />
		          </div>
		        </div>
		      </div>
		    );
		    counter++;
		    return randomSentenceDOM;
		  } 
		  else {
		    return null;
		  }
		});
	}


	render() {
		let randomSentences = ''
		if (this.props.student_level != undefined) {
			randomSentences = this.renderRandomSentences()
		}
		console.log(randomSentences)
		if (this.props.student_level != undefined) {  
			return (
				<div>
					<h3> Update Student Level </h3>
					<div className="StudentLevelForm">
					  <form>
					    <div className="form-group">
					      <TextField
					      	label="Name"
					      	id="student_level_name"
					      	onChange={(e, value) => {this.props.handleUpdateName(e, e.target.value, this.props.student_level); this.forceUpdate()}}
					        type="text"
					        value={this.props.student_level.name}
					        className="form-control" 
					        error={this.props.student_level.name == ""}
					        helperText={this.props.student_level.name == "" ? "Required" : "" }/>
					        <span className="generic-text-field">
					        <TextField
				        	  label="Generic Text"
				        	  id="student_level_text"
				        	  onChange={(e, value) => {this.props.handleUpdateText(e, e.target.value, this.props.student_level); this.forceUpdate() } }
				        	  data-level={JSON.stringify(this.props.student_level)}
					          type="text"
					          value={this.props.student_level.generic_text}
					          className="form-control generic-text-field"
					          InputProps={{
				                  className: "generic-text-field",
				              }}
					          multiline 
					          error={this.props.student_level.generic_text == ""}
					          helperText={this.props.student_level.generic_text == "" ? "Required" : "" }

					          />
					          </span>
					    </div>
					    <hr />
					    <div className="random-sentences-fieldset">
					      <h3>Random Sentence</h3>
					      {randomSentences}
					      <div className="btn-spacing">

						      <Button
						      	type="button"
						        className="btn btn-success"
						        data-level={JSON.stringify(this.props.student_level)}
						        onClick={(e) => {this.props.addSentence(e, this.props.student_level); this.forceUpdate()}}>
						        Add Random Sentence
						      </Button>
							  <br />
							  <Button
							    type="button"
								onClick={(e) => this.formSubmit(e)}
								className="btn btn-primary">
								Save
							  </Button>
						  </div>
						  </div>
					  </form>
					</div>
				</div>	
			)
		}
		else {
			return (<h3> Loading </h3>)
		}
	}

}

export default StudentLevelEditComponent;

