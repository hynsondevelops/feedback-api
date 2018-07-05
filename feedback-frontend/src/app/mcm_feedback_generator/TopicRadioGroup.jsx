import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class TopicRadioGroup extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
	}

	state = {
		selectedValue: '0',
	};

	handleChange = event => {
		console.log(event.target.value)
		this.setState({ selectedValue: event.target.value });
		this.forceUpdate()
	};

	
	render() {
		let mcm_topic = this.props.mcm_topic
		let link = <div><Link to={`/mcm_topics/${mcm_topic.id}/edit`} key={mcm_topic.id}>{mcm_topic.name}</Link><br /></div>;
		let scores = mcm_topic.sentence_scores.map(sentence_score => {
		    let score = <FormControlLabel name={mcm_topic.name} value={sentence_score.sentence} control={<Radio id={mcm_topic.name + sentence_score.score}/>} label={sentence_score.score} />
		    return score
		})
		let scoresRadio = <FormControl component="fieldset" required> <FormLabel component="legend">{mcm_topic.name}</FormLabel>
		          <RadioGroup
		            aria-label={mcm_topic.name}
		            name={mcm_topic.name}
		            id={mcm_topic.name}
		            value={this.state.selectedValue}
                    onChange={this.handleChange}> + {scores} + </RadioGroup></FormControl>
		console.log(scoresRadio)
		return (
			<div>
				{scoresRadio}
			</div>
		)
		
	}

}
export default TopicRadioGroup;