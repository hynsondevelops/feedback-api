import { connect } from 'react-redux';
import ResponsiveDrawer from './Sidebar';
import {logoutUser} from '../home/duck/actions.js';

const mapStateToProps = state => {
	const { token, email } = state.home;
	return { token, email }
};

const mapDispatchToProps = dispatch => {
	const logout = () => {
  		dispatch(logoutUser())	
  	}
  	return {logout}
};

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsiveDrawer);

export default SidebarContainer;