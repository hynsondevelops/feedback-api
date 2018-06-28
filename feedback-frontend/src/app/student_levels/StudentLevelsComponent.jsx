import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link} from 'react-router-dom'
import StudentLevelEditLink from '../common/buttons/StudentLevelEditLink'


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
					{this.props.student_level_index.map(student_level => (
                      <div>
                      	<StudentLevelEditLink student_level={student_level} />
                      </div>

                    ))}
				</div>	
			)
		}
		else {
			return (<h3> Loading </h3>)
		}
	}

}

export default StudentLevelsComponent;

