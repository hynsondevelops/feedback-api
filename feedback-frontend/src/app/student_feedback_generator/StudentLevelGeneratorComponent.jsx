import React from 'react';
import {Link} from 'react-router-dom'
import LevelRadioGroup from './LevelRadioGroup'
import Grid from '@material-ui/core/Grid';
import GenderRadioGroup from './GenderRadioGroup'
import TextField from '@material-ui/core/TextField';



class StudentLevelFeedbackGeneratorComponent extends React.Component {
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		this.props.getStudentLevelIndex(this.props.token)
	}

	
	render() {
		let student_level_index = this.props.student_level_index
		let student_level = undefined/*
		for (let i = 0; i < student_level_index.length; i++) {
		  let student_level_button = document.getElementById(student_level_index[i].name)
		  console.log(i)
		  console.log(student_level_button)
		  if (student_level_button.checked) {
		    student_level = student_level_index[i]
		  }
		}
		console.log(this.props.student_level_index)
		console.log(this.props.student_level_index != undefined)*/
		let generic_text = ""
		if (student_level) {
			generic_text = student_level.generic_text
		}
		console.log(document.getElementById("student_levels"))
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
						<h3> Student Feedback Generator </h3>
						<hr />
						<Grid container style={{minHeight: "600px"}} spacing={12}>
							<Grid container xs={3}>
								<LevelRadioGroup student_level_index={this.props.student_level_index}/>
								<div style={{display: "block"}}>
								</div>
							</Grid>
							<Grid container xs={2} >
								<GenderRadioGroup />
								<TextField
									label="Student Name"
								  placeholder="Student Name"
								  type="text"
								  className="form-control"
								  id="student_name"/>
								<h3>Introductory Sentence </h3>
								<textarea id="intro">It was very nice to see name today.</textarea>
								<h3>Conclusion Sentence </h3>
								<textarea id="conclusion" >See you again soon! -From Teacher {this.props.teacher_name}</textarea>
							</Grid>
							<Grid container xs={7}>
								<div style={{margin: "0 20%"}}>
									<h3> Pre-formatted Feedback </h3>
									<textarea id="student_level_generic" style={{fontSize: "20px", width: "inherit", minWidth: "400px", maxWidth: "600px", height: "200px"}} value={this.props.generic_text}> </textarea>
									<h3> Generated Feedback </h3>
									<textarea style={{fontSize: "20px", width: "inherit", minWidth: "500px",  maxWidth: "600px", height: "200px"}}value={feedback}> </textarea>
								</div>

							</Grid>
						</Grid>
						<Grid container spacing={12}>
							<Grid container xs={3}>
								<button
								  type="button"
								  data-index={JSON.stringify(this.props.student_level_index)}
								  onClick={this.props.generateFeedback}
								  className="btn btn-primary">
								  Generate
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
export default StudentLevelFeedbackGeneratorComponent;