import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class StudentLevelEditComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getStudentLevel(this.props.token, this.props.match.params.id)
	}

	renderRandomSentences() {
		let counter = 0;
		return this.props.student_level.random_sentences_attributes.map((random_sentence, index) => {
		  if (random_sentence._destroy === false) {
		    let randomSentenceDOM = (
		      <div className="random-sentence-form" key={index}>
		        <div className="form-group">
		          <div className="clearfix" style={{ marginBottom: 5 }}>
		            <button
		              type="button"
		              className="btn btn-danger"
		              style={{ padding: '5px 10px', float: 'right' }}
		              data-level={JSON.stringify(this.props.student_level)}
		              data-sentence_index={index}
		              onClick={this.props.removeSentence}>
		              X
		            </button>
		          </div>
		          <TextField
		          	label="Sentence"
		            placeholder="Sentence"
		            onChange={(e) => {this.props.updateSentence(e, index, this.props.student_level); this.forceUpdate()}}
		            type="text"
		            value={random_sentence.sentence}
		            className="form-control"
		            id={"sentence-" + index}/>
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
					        className="form-control" />
					        <TextField
					        	label="Generic Text"
					        	id="student_level_text"
					        	onChange={(e, value) => {this.props.handleUpdateText(e, e.target.value, this.props.student_level); this.forceUpdate() } }
					        	data-level={JSON.stringify(this.props.student_level)}
					          type="text"
					          value={this.props.student_level.generic_text}
					          className="form-control" />
					    </div>
					    <hr />
					    <div className="random-sentences-fieldset">
					      <h3>Random Sentence</h3>
					      {randomSentences}
					      <div style={{margin: "2% 0 0 25%"}}>

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
								onClick={(e) => {this.props.updateStudentLevel(e, this.props.token, this.props.student_level); document.getElementById("student_level_index_link").click()}}
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

