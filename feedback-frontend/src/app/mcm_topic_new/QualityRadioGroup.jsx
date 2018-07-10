import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class QualityRadioGroup extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
	}

	state = {
		value: '0',
	};

	handleChange = event => {
		document.getElementById("quality-0").value=event.target.value
		this.setState({ value: event.target.value });
		this.props.updateSentence(event, this.props.index, this.props.mcm_topic_edit);
		this.forceUpdate();
	};

	
	render() {
		return (
		<FormControl component="fieldset" required>
	         <FormLabel component="legend">Quality</FormLabel>
	         <RadioGroup
	           aria-label="quality"
	           name="quality"
	           value={this.state.value}
	           id={"quality-"+this.props.index}
	           onChange={this.handleChange}
	         >
	           <FormControlLabel name="quality" id={"good-" + this.props.index} value="1" control={<Radio />} label="Good" />
	           <FormControlLabel name="quality" id={"good-" + this.props.index} value="0" control={<Radio />} label="Needs Improvement" />
	         </RadioGroup>
	       </FormControl>
		)
		
	}

}
export default QualityRadioGroup;