import { connect } from 'react-redux';
import ResponsiveDrawer from './Sidebar';

const mapStateToProps = state => {
	console.log(state)
	const { token, email } = state.home;
	return { token, email }
};

const mapDispatchToProps = dispatch => {
  // '1' is the number by which you want to increment the count
  
  return {
  }
};

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveDrawer);

export default SidebarContainer;