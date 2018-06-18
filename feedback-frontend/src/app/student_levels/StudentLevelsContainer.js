import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import StudentLevelsComponent from './StudentLevelsComponent';
import fetchStudentLevels from './duck/operations';
import { onComponentDidMount } from 'react-redux-lifecycle'


const mapStateToProps = state => {
	const { student_level_index } = state.student_level_index;
	const { token } = state.home
	return { student_level_index, token }
};

const mapDispatchToProps = (dispatch) => {
	const getStudentLevelIndex = (token) => {
    	dispatch(fetchStudentLevels(token));
    }
    return {getStudentLevelIndex}
}




const StudentLevelsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentLevelsComponent)

export default StudentLevelsContainer;