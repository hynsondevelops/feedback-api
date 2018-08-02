import { connect } from 'react-redux';
import SessionComponent from './SessionComponent';

const mapStateToProps = state => {
	const { token, email } = state.home;
	return { token, email }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  
  return {
  }
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionComponent);

export default SessionContainer;