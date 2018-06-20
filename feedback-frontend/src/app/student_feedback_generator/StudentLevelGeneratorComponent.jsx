import React from 'react';
import {Link} from 'react-router-dom'


class StudentLevelFeedbackGeneratorComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getStudentLevelIndex(this.props.token)
	}

	
	render() {
		console.log(this.props.student_level_index)
		console.log(this.props.student_level_index != undefined)
		if (this.props.student_level_index != undefined) {
			console.log(">>>>>")
			const levelButtons = this.props.student_level_index.map(student_level => {
				let link = <div><Link to={`/student_levels/${student_level.id}/edit`} key={student_level.id}>{student_level.name}</Link> <br />
				<div><input type="radio" id={student_level.name} name={student_level.name} value={student_level.sentence} data-level={JSON.stringify(student_level)}/> {student_level.name} <br/> </div>
				</div>		
				return link
			})
			if (this.props.token!=null) {
				let feedback = "Feedback goes here."
				if (this.props.feedback != undefined) {
					feedback = this.props.feedback
				}
				return (
					<div>
						<h3> Welcome, {this.props.email} </h3>
						<Link to="/home">StudentLevelFeedbackGenerator</Link> // action updates location state + changes address bar
						<br />
						{levelButtons}
						<button
						  type="button"
						  data-index={JSON.stringify(this.props.student_level_index)}
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
export default StudentLevelFeedbackGeneratorComponent;