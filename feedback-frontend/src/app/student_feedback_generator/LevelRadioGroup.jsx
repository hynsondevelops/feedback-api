import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class LevelRadioGroup extends React.Component {
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
		let generic_text_box = document.getElementById("student_level_generic")
		/*for (let i = 0; i < this.props.student_level_index.length; i++) {
			console.log(this.props.student_level_index[i])
			console.log(event.target.value)
			if (this.props.student_level_index[i].name == event.target.value) {
				console.log("HIT")
				generic_text_box.value = this.props.student_level_index[i].generic_text
			}
		}*/
		this.setState({ selectedValue: event.target.value });
		this.forceUpdate()
	};

	
	render() {
		
		let levels = this.props.student_level_index.map(student_level => {
		    let level = <FormControlLabel  name={student_level.name} value={student_level.name} control={<Radio id={student_level.name}/>} label={student_level.name} />
		    return level
		})
		//levels = <div><Grid container xs={12} > {levels.slice(0, levels.length/2)} {levels.splice(levels.length/2, levels.length)} </Grid></div>
		let levelsRadio = <FormControl component="fieldset" required> <FormLabel component="legend">Student Levels</FormLabel>
		          <RadioGroup
		            aria-label="Student Levels"
		            name="Student Levels"
		            id="student_levels"
		            className="limited-height"
		            value={this.state.selectedValue}
                    onChange={this.handleChange}
                    >
                		{levels}

                    	 </RadioGroup>
            </FormControl>
		console.log(levelsRadio)
		return (
			<div>
				{levelsRadio}
			</div>
		)
		
	}

}
export default LevelRadioGroup;