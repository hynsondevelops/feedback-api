import React from 'react';
import { Form, Field } from 'react-final-form'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class StudentLevelNewComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.newStudentLevel()
	}

	renderRandomSentences() {
		let counter = 0;
		return this.props.student_level.random_sentences_attributes.map((random_sentence, index) => {
		  if (random_sentence._destroy === false) {
		    let randomSentenceDOM = (
		      <div className="random-sentence-form" key={index}>
		        <div className="form-group">
		          <div className="clearfix" style={{ marginBottom: 5 }}>
		            <label>
		              random_sentence {counter + 1}
		            </label>
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
		          <input
		            placeholder="Sentence"
		            onChange={this.props.updateSentence}
		            data-level={JSON.stringify(this.props.student_level)}
		            data-sentence={document.getElementById("sentence-" + index)}
		            data-index={index}
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
		console.log("Rendering edit")
		console.log(this.props.student_level.name)
		let randomSentences = ''
		if (this.props.student_level.id != undefined) {
			this.props.history.push("/student_levels")
		}
		if (this.props.student_level != undefined) {
			randomSentences = this.renderRandomSentences()
		}
		console.log(randomSentences)
		if (this.props.student_level != undefined) {  
			return (
				<Router>
					<div>
						<div className="StudentLevelForm">
						  <form>
						    <div className="form-group">
						      <label>Name</label>
						      <input
						      	id="student_level_name"
						      	onChange={this.props.handleUpdateName}
						      	data-level={JSON.stringify(this.props.student_level)}
						        type="text"
						        value={this.props.student_level.name}
						        className="form-control" />
						        <label>Generic Text</label>
						        <input
						        	id="student_level_text"
						        	onChange={this.props.handleUpdateText}
						        	data-level={JSON.stringify(this.props.student_level)}
						          type="text"
						          value={this.props.student_level.generic_text}
						          className="form-control" />
						    </div>
						    <hr />
						    <div className="random-sentences-fieldset">
						      <h3>Random Sentence</h3>
						      <button
						      	type="button"
						        className="btn btn-success"
						        data-level={JSON.stringify(this.props.student_level)}
						        onClick={this.props.addSentence}>
						        + Add Random Sentence
						      </button>
						    </div>
						    <br />
						    <button
						      type="button"
						      data-level={JSON.stringify(this.props.student_level)}
						      data-token={this.props.token}
						      onClick={this.props.createStudentLevel}
						      className="btn btn-primary">
						      Save
						    </button>
						    &nbsp;
						    <button
						      onClick={e => this.handleCancel()}
						      className="btn btn-default">
						      Cancel
						    </button>{' '}
						    {randomSentences}
						  </form>
						</div>
					</div>
				</Router>
			)
		}
		else {
			return (<h3> Loading </h3>)
		}
	}

}

export default StudentLevelNewComponent;

