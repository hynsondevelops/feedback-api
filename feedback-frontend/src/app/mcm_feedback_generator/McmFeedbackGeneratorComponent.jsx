import React from 'react';
import {Link} from 'react-router-dom'


class McmFeedbackGeneratorComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getMcmIndex(this.props.token)
	}

	
	render() {
		console.log(this.props.mcm_index)
		console.log(this.props.mcm_index != undefined)
		if (this.props.mcm_index != undefined) {
			console.log(">>>>>")
			const topicButtons = this.props.mcm_index.map(mcm_topic => {
				let link = <div><Link to={`/mcm_topics/${mcm_topic.id}/edit`} key={mcm_topic.id}>{mcm_topic.name}</Link> <br /></div>
				let scores = mcm_topic.sentence_scores.map(sentence_score => {
				    let score = <div><input type="radio" id={mcm_topic.name + sentence_score.score} name={mcm_topic.name} value={sentence_score.sentence}/> {sentence_score.score} <br/> </div>
				    return score
				})
				return [link, scores]
			})
			if (this.props.token!=null) {
				console.log(topicButtons)
				let feedback = "Feedback goes here."
				if (this.props.feedback != undefined) {
					feedback = this.props.feedback
				}
				return (
					<div>
						<h3> Welcome, {this.props.email} </h3>
						<Link to="/home">McmFeedbackGenerator</Link> // action updates location state + changes address bar
						<br />
						{topicButtons}
						<button
						  type="button"
						  data-index={JSON.stringify(this.props.mcm_index)}
						  onClick={this.props.generateFeedback}
						  className="btn btn-primary">
						  Save
						</button>
						
							<textarea value={feedback}> </textarea>
					</div>
				)
			}
		}
		else {
		  return (
		    <div>
		      <h3>Welcome to Feedback Forms</h3>
		    </div>
		  )
		}
	}

}
export default McmFeedbackGeneratorComponent;