import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link} from 'react-router-dom'
import StudentLevelEditLink from '../common/buttons/StudentLevelEditLink'
import StudentLevelCard from '../common/StudentLevelCard'
import Grid from '@material-ui/core/Grid';
import './styles.scss'

class StudentLevelsComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getStudentLevelIndex(this.props.token)
	}


	render() {
		console.log(this.props.student_level_index)
		if (this.props.student_level_index != undefined) {
			return (
				<div>
					<h3> Student Levels </h3>
					<Grid container spacing={12}>
					{this.props.student_level_index.map(student_level => (
						<Grid item xs={5} className="card-container"> 		
	                    	<StudentLevelCard student_level={student_level} />
	                    </Grid>
                    ))}
					</Grid>
				</div>	
			)
		}
		else {
			return (<h3> Loading </h3>)
		}
	}

}

export default StudentLevelsComponent;

