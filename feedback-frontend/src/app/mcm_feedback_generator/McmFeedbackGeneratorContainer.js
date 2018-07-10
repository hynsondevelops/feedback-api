import { connect } from 'react-redux';
import McmFeedbackGeneratorComponent from './McmFeedbackGeneratorComponent';
import fetchMcmTopics from '../mcm_topics/duck/operations';
import generateMcmFeedbackOp from './duck/operations'

const mapStateToProps = state => {
	const { token, email } = state.home;
	const {mcm_index } = state.mcm_index;
  const {goodFeedback, improvementFeedback} = state.mcmFeedbackGenerator;
	return { token, email, mcm_index, goodFeedback, improvementFeedback }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const getMcmIndex = (token) => {
  	dispatch(fetchMcmTopics(token));
  }
  const generateFeedback = (event) => {
    dispatch(generateMcmFeedbackOp(event))
  }
  return {getMcmIndex, generateFeedback}
};

const McmFeedbackGeneratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(McmFeedbackGeneratorComponent);

export default McmFeedbackGeneratorContainer;