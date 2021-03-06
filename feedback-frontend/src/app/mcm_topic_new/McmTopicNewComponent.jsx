import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link, withRouter} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import QualityRadioGroup from './QualityRadioGroup';
import ScoreSelect from './ScoreSelect'
import '../common/styles.scss'

class McmTopicNewComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {scores: []}
	}


	componentWillMount() {
		this.props.newMcmTopic()
	}

	sentencePresence() {
		let atleastOneSentence = false
		let emptySentence = false
		for (let i = 0; i < this.props.mcm_topic_edit.sentence_scores_attributes.length; i++) {
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

	formSubmit(e, topic) {
		let errors = ""
		let noName = JSON.parse(document.getElementById("mcm_topic_name").getAttribute("aria-invalid"))
		errors += this.sentencePresence()

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
		          <div className="clearfix">
		            <button
		              type="button"
		              className="btn btn-danger x-btn"
		              data-topic={JSON.stringify(this.props.mcm_topic_edit)}
		              data-sentence_index={index}
		              onClick={this.props.removeSentence}>
		              X
		            </button>
		          </div>
		          <ScoreSelect index={index} callback={this.props.updateSentence} mcm_topic_edit={this.props.mcm_topic_edit} />
		          
		          <FormControl className="form-sizing">
			          <TextField
			          	label="Sentence"
			            placeholder="Sentence"
			            multiline={true}
			            onChange={(e) => {this.props.updateSentence(e, index, this.props.mcm_topic_edit); this.forceUpdate()}}
			            type="text"
			            value={sentence_score.sentence}
			            className="form-control form-sizing"
			            id={"sentence-" + index}
			            error={sentence_score.sentence == undefined || sentence_score.sentence == ""}
			            helperText={(sentence_score.sentence == undefined || sentence_score.sentence == "") ? "Required" : "" }
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
					        className="form-control" 
					        helperText={this.props.mcm_topic_edit.name == "" ? "Required" : "" }/>
					    </div>
					    <div className="sentence-scores-fieldset">
					      <h3>Sentence Scores</h3>
					      {sentenceScores}
					      	<div className="full-width">
							    <div className="btn-spacing">
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

