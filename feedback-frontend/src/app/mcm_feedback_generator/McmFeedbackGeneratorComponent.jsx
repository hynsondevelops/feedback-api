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
				let feedback = "Feedback goes here."
				if (this.props.feedback != undefined) {
					feedback = this.props.feedback
				}
				return (
					<div>
						MCM Feedback Generator						
						<br />
						<Grid container spacing={12}>
							<Grid container xs={8}>
								{topicButtons}
							</Grid>
							<Grid xs={4}>
								<textarea style={{width: "80%", minHeight: "300px", height: "50%"}} value={feedback}> </textarea><br />
								<button
								  type="button"
								  data-index={JSON.stringify(this.props.mcm_index)}
								  onClick={this.props.generateFeedback}
								  className="btn btn-primary">
								  Save
								</button>
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