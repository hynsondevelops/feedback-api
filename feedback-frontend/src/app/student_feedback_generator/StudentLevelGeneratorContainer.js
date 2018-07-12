import { connect } from 'react-redux';
import StudentLevelGeneratorComponent from './StudentLevelGeneratorComponent';
import fetchStudentLevels from '../student_levels/duck/operations';
import generateStudentLevelFeedbackOp from './duck/operations'

const mapStateToProps = state => {
	const { token, email } = state.home;
	const {student_level_index } = state.student_level_index;
  	const {feedback, generic_text} = state.student_level_feedback;
	return { token, email, student_level_index, feedback, generic_text }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const getStudentLevelIndex = (token) => {
  	dispatch(fetchStudentLevels(token));
  }
  const generateFeedback = (event) => {
    dispatch(generateStudentLevelFeedbackOp(event))
  }
  return {getStudentLevelIndex, generateFeedback}
};

const StudentLevelFeedbackGeneratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentLevelGeneratorComponent);

export default StudentLevelFeedbackGeneratorContainer;