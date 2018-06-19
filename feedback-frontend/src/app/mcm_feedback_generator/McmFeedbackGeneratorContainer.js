import { connect } from 'react-redux';
import McmFeedbackGeneratorComponent from './McmFeedbackGeneratorComponent';
import fetchMcmTopics from '../mcm_topics/duck/operations';


const mapStateToProps = state => {
	const { token, email } = state.home;
	const {mcm_index } = state.mcm_index;
	return { token, email, mcm_index }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  const getMcmIndex = (token) => {
      	dispatch(fetchMcmTopics(token));
      }
   return {getMcmIndex}
};

const McmFeedbackGeneratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(McmFeedbackGeneratorComponent);

export default McmFeedbackGeneratorContainer;