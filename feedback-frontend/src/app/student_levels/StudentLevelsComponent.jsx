import React from 'react';
import { Form, Field } from 'react-final-form'
import {Link} from 'react-router-dom'


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
			const student_levels = this.props.student_level_index.map(student_level =>
				`${student_level.random_sentences[0].score}: ${student_level.random_sentences[0].sentence} `  
			)
			return (
				<div>
					{student_levels}
					<h3> Student Levels </h3>
					{}
					<h3> Random Sentences </h3>
					{}
					{this.props.student_level_index.map(student_level => (
                      <Link to={`/student_levels/${student_level.id}/edit`} key={student_level.id}>{student_level.name, student_level.generic_text}</Link>

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

