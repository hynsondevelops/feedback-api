import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class ScoreSelect extends React.Component {
	constructor(props) {
		super(props);

		let score = 0

		if (this.props.mcm_topic_edit.sentence_scores_attributes[this.props.index].score) {
			score = this.props.mcm_topic_edit.sentence_scores_attributes[this.props.index].scoreF
		}
		this.state = {
			score: score
		};
	}


	componentDidUpdate() {
		this.props.callback(false, this.props.index, this.props.mcm_topic_edit)

	}

	handleScoreChange(e, index) {
		this.setState({score: e.target.value})
	} 

	
	render() {
		return (
			<div>
				<InputLabel htmlFor={"score-" + this.props.index}>Score</InputLabel>
	            <Select
	              id={"score-" + this.props.index}
	              value={this.state.score}
	              onChange={(e) => this.handleScoreChange(e, this.props.index)}
	              inputProps={{
	                name: 'score',
	                
	              }}
	            >
	              <MenuItem value={0}>0</MenuItem>
	              <MenuItem value={1}>1</MenuItem>
	              <MenuItem value={2}>2</MenuItem>
	              <MenuItem value={3}>3</MenuItem>
	              <MenuItem value={4}>4</MenuItem>
	              <MenuItem value={5}>5</MenuItem>
	              <MenuItem value={6}>6</MenuItem>
	              <MenuItem value={7}>7</MenuItem>
	              <MenuItem value={8}>8</MenuItem>
	              <MenuItem value={9}>9</MenuItem>
	            </Select>
            </div>
		)
		this.props.callback(false, this.props.index, this.props.mcm_topic_edit)

		
	}

}
export default ScoreSelect;