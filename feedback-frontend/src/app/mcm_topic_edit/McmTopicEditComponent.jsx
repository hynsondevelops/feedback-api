import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

class McmTopicEditComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getMcmTopic(this.props.token, this.props.match.params.id)
	}

	renderSentenceScores() {
		let counter = 0;
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
		          <FormControl fullWidth >
		          	<TextField
			          	style={{margin: "0 0 0 2%"}}
			          	label="Sentence"
			            placeholder="Sentence"
			            onChange={(e) => {this.props.updateSentence(e, index, this.props.mcm_topic_edit); this.forceUpdate()}}
			            type="text"
			            value={sentence_score.sentence}
			            className="form-control"
			            id={"sentence-" + index}/>
		           </FormControl>
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
					        className="form-control" />
					    </div>
					    <hr />
					    <div className="sentence-scores-fieldset">
						    <h3>Sentence Scores</h3>
						    {sentenceScores}
						    <div style={{margin: "2% 0 0 25%"}}>
								<Button
									type="button"
									className="btn btn-success"
									data-topic={JSON.stringify(this.props.mcm_topic_edit)}
									onClick={(e) => {this.props.addSentence(e, this.props.mcm_topic_edit); this.forceUpdate()}}>
									Add Sentence Score
								</Button>
							    <Button
							      type="button"
							      onClick={(e) => {this.props.updateMcmTopic(e, this.props.token, this.props.mcm_topic_edit); document.getElementById("mcm_topic_index_link").click()}}
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

