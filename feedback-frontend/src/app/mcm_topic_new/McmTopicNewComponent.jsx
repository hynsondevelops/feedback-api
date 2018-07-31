import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link, withRouter} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import QualityRadioGroup from './QualityRadioGroup';
import ScoreSelect from './ScoreSelect'


class McmTopicNewComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {scores: []}
	}


	componentWillMount() {
		this.props.newMcmTopic()
	}

	formSubmit(e, topic) {
		let errors = ""
		let noName = JSON.parse(document.getElementById("mcm_topic_name").getAttribute("aria-invalid"))
		let noSentence = false;
		let firstSentence = document.getElementById("sentence-0")
		if (firstSentence) { //first sentence exists
			if (JSON.parse(firstSentence.getAttribute("aria-invalid"))) { //error exists
				errors += "\nMust have sentence content."
			}
			else {//check for any blank sentences
				console.log(topic.sentence_scores_attributes)
				console.log(topic.sentence_scores_attributes.length)
				for (let i = 0; i < topic.sentence_scores_attributes.length; i++) {
					let curSentence = document.getElementById("sentence-"+ i)
					if (JSON.parse(curSentence.getAttribute("aria-invalid"))) { //error
						errors += "\nMust have sentence content."
					}
				}
			}
		}
		else {
			errors += "\nMust have atleast (1) sentence score."
		}

		if (noName) {
			errors += "\nMust have a name."
		}

		if (errors == "") { //no errors
			this.props.createMcmTopic(e, this.props.token, topic)
		}
		else { //errors
			alert(errors)
		}
	}


	renderSentenceScores() {
		console.log(this.state.score)
		let counter = 0;
		let topic = this.props.mcm_topic_edit
		return this.props.mcm_topic_edit.sentence_scores_attributes.map((sentence_score, index) => {
		  if (sentence_score._destroy === false) {
		    let sentenceScoreDOM = (
		      <div className="sentence-score-form" key={index}>
		        <div className="form-group">
		          <div className="clearfix" style={{ marginBottom: 5 }}>
		            <button
		              type="button"
		              className="btn btn-danger"
		              style={{ padding: '5px 10px', float: 'right' }}
		              data-topic={JSON.stringify(this.props.mcm_topic_edit)}
		              data-sentence_index={index}
		              onClick={this.props.removeSentence}>
		              X
		            </button>
		          </div>
		          <ScoreSelect index={index} callback={this.props.updateSentence} mcm_topic_edit={this.props.mcm_topic_edit} />
		          
		          <FormControl style={{minWidth: "500px"}}>
			          <TextField
			          	style={{margin: "0 0 0 2%"}}
			          	label="Sentence"
			            placeholder="Sentence"
			            multiline={true}
			            onChange={(e) => {this.props.updateSentence(e, index, this.props.mcm_topic_edit); this.forceUpdate()}}
			            type="text"
			            value={sentence_score.sentence}
			            className="form-control"
			            id={"sentence-" + index}
			            error={sentence_score.sentence == undefined || sentence_score.sentence == ""}
			            />
		           </FormControl>
		           <QualityRadioGroup index={index} mcm_topic_edit={this.props.mcm_topic_edit} updateSentence={this.props.updateSentence}/>
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


	render() {
		let sentenceScores = ''
		let topic = this.props.mcm_topic_edit
		if (this.props.mcm_topic_edit != undefined) {
			sentenceScores = this.renderSentenceScores()
		}
		if (this.props.mcm_topic_edit.id != undefined) {
			this.props.history.push("/mcm_topics")
		}
		if (this.props.mcm_topic_edit != undefined) {  
			return (
				<div>
					<div className="McmTopicForm">
					<h3> Create a New Mock Class Mentor Topic </h3>
					  <form>
					    <div className="form-group">
					      <TextField 
					      	label="Name"
					      	id="mcm_topic_name"
					      	onChange={(e, value) => {this.props.handleUpdateName(e, e.target.value, topic); this.forceUpdate()}}
					        type="text"
					        value={this.props.mcm_topic_edit.name}
					        error={topic.name == undefined || topic.name == ""}
					        className="form-control" />
					    </div>
					    <div className="sentence-scores-fieldset">
					      <h3>Sentence Scores</h3>
					      {sentenceScores}
					      	<div style={{width: "100%"}}>
							    <div style={{margin: "2% 0 0 25%"}}>
									<Button
										type="button"
										className="btn btn-success"
										data-topic={JSON.stringify(this.props.mcm_topic_edit)}
										onClick={(e) => {this.props.addSentence(e, topic); this.forceUpdate()}}>
										Add Sentence Score
									</Button>
								    <Button
								      type="button"
								      data-topic={JSON.stringify(this.props.mcm_topic_edit)}
								      data-token={this.props.token}
								      data-history={JSON.stringify(this.props.history)}
								      onClick={(e) => this.formSubmit(e, topic)}
								      className="btn btn-primary">
								      Save
								    </Button>
								</div>
							</div>
						</div>
					  </form>
					</div>
				</div>	
			)
		}
		else {
			return (<h3> New </h3>)
		}
	}

}

export default withRouter(McmTopicNewComponent);

