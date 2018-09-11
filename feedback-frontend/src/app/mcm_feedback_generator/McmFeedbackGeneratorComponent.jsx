import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TopicRadioGroup from './TopicRadioGroup'

import './styles.scss'


class McmFeedbackGeneratorComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getMcmIndex(this.props.token)
	}

	state = {
		selectedValue: '4',
	};

	handleChange = event => {
		this.setState({ selectedValue: event.target.value });
	};

	
	render() {
		console.log(this.props.mcm_index)
		console.log(this.props.mcm_index != undefined)
		if (this.props.mcm_index != undefined) {
			console.log(">>>>>")
			const topicButtons = this.props.mcm_index.map(mcm_topic  => {
				return <Grid item xs={4}><TopicRadioGroup mcm_topic={mcm_topic}/></Grid>
			})
			if (this.props.token!=null) {
				console.log(topicButtons)
				let goodFeedback = "Good feedback goes here."
				let improvementFeedback = "Improvement feedback goes here."

				if (this.props.goodFeedback != undefined) {
					goodFeedback = this.props.goodFeedback
				}
				if (this.props.improvementFeedback != undefined) {
					improvementFeedback = this.props.improvementFeedback
				}
				return (
					<div>
						<h3> MCM Feedback Generator </h3>						
						<br />
						<Grid container spacing={12}>
							<Grid container xs={4}>
								{topicButtons}
							</Grid>
							<Grid container xs={8}>
								<Grid xs={6} >
									<h3>Introductory Sentence </h3>
									<textarea className="template-text" id="intro">It was a pleasure working with you today. </textarea>
									<h3> Good Feedback </h3>
									<textarea className="suggestion-text" value={goodFeedback}> </textarea>
								</Grid>
								<Grid xs={6} >
									<h3>Conclusion Sentence </h3>
									<textarea className="template-text" id="conclusion" >Best of luck to you in your VIPKID journey. </textarea>
									<h3> Improvement Feedback </h3>
									<textarea className="suggestion-text" value={improvementFeedback}> </textarea><br />
								</Grid>
								<Grid xs={12}>
									<button
									  type="button"
									  data-index={JSON.stringify(this.props.mcm_index)}
									  onClick={this.props.generateFeedback}
									  className="btn btn-primary">
									  Save
									</button>
								</Grid>
							</Grid>
						</Grid>
						
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