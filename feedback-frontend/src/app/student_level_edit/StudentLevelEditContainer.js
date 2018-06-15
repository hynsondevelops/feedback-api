import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import StudentLevelEditComponent from './StudentLevelEditComponent';
import fetchStudentLevelOp from './duck/operations';
import { onComponentDidMount } from 'react-redux-lifecycle'
import {updateStudentLevelOp} from './duck/operations';
import {addRandomSentenceOp, removeRandomSentenceOp, updateRandomSentenceOp, updateStudentLevelNameOp, updateStudentLevelTextOp} from '../common/duck/operations'

const mapStateToProps = state => {
	const { student_level } = state.student_level;
	const { token } = state.home
	return { student_level, token }
};

//getStudentLevel
//addSentence
//removeSentence
const mapDispatchToProps = (dispatch) => {
	const getStudentLevel = (token, student_level_id) => {
    	dispatch(fetchStudentLevelOp(token, student_level_id));
    }
    const addSentence = (event) => {
    	dispatch(addRandomSentenceOp(event))
    }
    const removeSentence = (event) => {
    	dispatch(removeRandomSentenceOp(event))
    }
    const updateSentence = (event) => {
    	dispatch(updateRandomSentenceOp(event))
    }
    const updateStudentLevel = (event) => {
    	dispatch(updateStudentLevelOp(event))
    }
    const handleUpdateName = (event) => {
        dispatch(updateStudentLevelNameOp(event))
    }
    const handleUpdateText = (event) => {
        dispatch(updateStudentLevelTextOp(event))
    }
    return {getStudentLevel, addSentence, removeSentence, updateSentence, updateStudentLevel, handleUpdateName, handleUpdateText}
}




const StudentLevelEditContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentLevelEditComponent)

export default StudentLevelEditContainer;