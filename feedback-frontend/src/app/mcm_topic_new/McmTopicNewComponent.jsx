import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link, withRouter} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import QualityRadioGroup from './QualityRadioGroup';

class McmTopicNewComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.newMcmTopic()
	}

	renderSentenceScores() {
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
		          <TextField 
		          	label="Score"
		            placeholder="Score"
		            onChange={(e) => {this.props.updateSentence(e, index, this.props.mcm_topic_edit); this.forceUpdate()}}
		            type="text"
		            className="form-control"
		            value={sentence_score.score}
		            id={"score-" + index}/>
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
			            id={"sentence-" + index}/>
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
		console.log(this.props)
		let sentenceScores = ''
		let topic = this.props.mcm_topic_edit
		console.log(this.props.mcm_topic_edit.name)
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
								      onClick={(e) => this.props.createMcmTopic(e, this.props.token, topic)}
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

