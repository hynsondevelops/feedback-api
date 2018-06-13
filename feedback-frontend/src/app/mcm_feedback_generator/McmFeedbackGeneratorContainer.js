import { connect } from 'react-redux';
import McmFeedbackGeneratorComponent from './McmFeedbackGeneratorComponent';

const mapStateToProps = state => {
	const { token, email } = state.home;
	 return { token, email }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  
  return {
  }
};

const McmFeedbackGeneratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(McmFeedbackGeneratorComponent);

export default McmFeedbackGeneratorContainer;