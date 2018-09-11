import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import QualityRadioGroup from '../mcm_topic_new/QualityRadioGroup';
import ScoreSelect from '../mcm_topic_new/ScoreSelect';
import '../common/styles.scss'



class McmTopicEditComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getMcmTopic(this.props.token, this.props.match.params.id)
	}

	updateMcmTopicRedirect(e) {
		this.props.updateMcmTopic(e, this.props.token, this.props.mcm_topic_edit); 
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

	formSubmit(e) {
		let errors = ""
		let noName = JSON.parse(document.getElementById("mcm_topic_name").getAttribute("aria-invalid"))
		errors += this.sentencePresence()

		if (noName) {
			errors += "\nMust have a name."
		}

		if (errors == "") { //no errors
			this.props.updateMcmTopic(e, this.props.token, this.props.mcm_topic_edit); 
		}
		else { //errors
			alert(errors)
		}
	}

	renderSentenceScores() {
		let counter = 0;
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

		          <FormControl className="form-sizing" >
		          	<TextField
		          		multiline={true}
			          	label="Sentence"
			            placeholder="Sentence"
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
		if (this.props.mcm_topic_edit != undefined) {
			sentenceScores = this.renderSentenceScores()
		}
		console.log(sentenceScores)
		if (this.props.mcm_topic_edit != undefined) {  
			return (
				<div>
					<div className="McmTopicForm">
					  <form>
					    <div className="form-group">
					      <TextField 
					      	label="Name"
					      	id="mcm_topic_name"
					      	onChange={(e, value) => {this.props.handleUpdateName(e, e.target.value, this.props.mcm_topic_edit); this.forceUpdate()}}
					        type="text"
					        value={this.props.mcm_topic_edit.name}
					        className="form-control" 
					        error={this.props.mcm_topic_edit.name == undefined || this.props.mcm_topic_edit.name == ""}
					        helperText={this.props.mcm_topic_edit.name == "" ? "Required" : "" }

					        />
					    </div>
					    <hr />
					    <div className="sentence-scores-fieldset">
						    <h3>Sentence Scores</h3>
						    {sentenceScores}
						    <div className="btn-spacing">
								<Button
									type="button"
									className="btn btn-success"
									data-topic={JSON.stringify(this.props.mcm_topic_edit)}
									onClick={(e) => {this.props.addSentence(e, this.props.mcm_topic_edit); this.forceUpdate()}}>
									Add Sentence Score
								</Button>
							    <Button
							      type="button"
							      onClick={(e) => {this.formSubmit(e)}}
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



export default McmTopicEditComponent;

