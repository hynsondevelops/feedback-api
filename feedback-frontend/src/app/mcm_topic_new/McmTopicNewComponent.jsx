import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link, withRouter} from 'react-router-dom'


class McmTopicNewComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.newMcmTopic()
	}

	renderSentenceScores() {
		let counter = 0;
		return this.props.mcm_topic_edit.sentence_scores_attributes.map((sentence_score, index) => {
		  if (sentence_score._destroy === false) {
		    let sentenceScoreDOM = (
		      <div className="sentence-score-form" key={index}>
		        <div className="form-group">
		          <div className="clearfix" style={{ marginBottom: 5 }}>
		            <label>
		              sentence_score {counter + 1}
		            </label>
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
		          <input
		            placeholder="Score"
		            onChange={this.props.updateSentence}
		            data-topic={JSON.stringify(this.props.mcm_topic_edit)}
		            data-index={index}
		            type="text"
		            className="form-control"
		            value={sentence_score.score}
		            id={"score-" + index}/>
		          <input
		            placeholder="Sentence"
		            onChange={this.props.updateSentence}
		            data-topic={JSON.stringify(this.props.mcm_topic_edit)}
		            data-sentence={document.getElementById("sentence-" + index)}
		            data-score={document.getElementById("score-" + index)}
		            data-index={index}
		            type="text"
		            value={sentence_score.sentence}
		            className="form-control"
		            id={"sentence-" + index}/>
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
		if (this.props.mcm_topic_edit.id != undefined) {
			this.props.history.push("/mcm_topics")
		}
		if (this.props.mcm_topic_edit != undefined) {  
			return (
				<div>
					<div className="McmTopicForm">
					  <form>
					    <div className="form-group">
					      <label>Name</label>
					      <input
					      	id="mcm_topic_name"
					      	onChange={this.props.handleUpdateName}
					      	data-topic={JSON.stringify(this.props.mcm_topic_edit)}
					        type="text"
					        value={this.props.mcm_topic_edit.name}
					        className="form-control" />
					    </div>
					    <hr />
					    <div className="sentence-scores-fieldset">
					      <h3>Sentence Scores</h3>
					      <button
					      	type="button"
					        className="btn btn-success"
					        data-topic={JSON.stringify(this.props.mcm_topic_edit)}
					        onClick={this.props.addSentence}>
					        + Add Sentence Score
					      </button>
					    </div>
					    <br />
					    <button
					      type="button"
					      data-topic={JSON.stringify(this.props.mcm_topic_edit)}
					      data-token={this.props.token}
					      data-history={JSON.stringify(this.props.history)}
					      onClick={this.props.createMcmTopic}
					      className="btn btn-primary">
					      Save
					    </button>
					    &nbsp;
					    <button
					      onClick={e => this.handleCancel()}
					      className="btn btn-default">
					      Cancel
					    </button>{' '}
					    {sentenceScores}
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

