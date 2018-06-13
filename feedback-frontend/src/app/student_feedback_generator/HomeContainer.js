import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => {
	const { token, email } = state.auth_info;
	 return { token, email }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  
  return {
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;