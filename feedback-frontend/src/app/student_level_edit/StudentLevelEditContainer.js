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
    const addSentence = (event, level) => {
        dispatch(addRandomSentenceOp(event, level))
    }
    const removeSentence = (event) => {
        dispatch(removeRandomSentenceOp(event))
    }
    const updateSentence = (event, index, level) => {
        dispatch(updateRandomSentenceOp(event, index, level))
    }
    const updateStudentLevel = (event, token, level) => {
    	dispatch(updateStudentLevelOp(event, token, level))
    }
    const handleUpdateName = (event, name, level) => {
        dispatch(updateStudentLevelNameOp(event, name, level))
    }
    const handleUpdateText = (event, text, level) => {
        dispatch(updateStudentLevelTextOp(event, text, level))
    }
    return {getStudentLevel, addSentence, removeSentence, updateSentence, updateStudentLevel, handleUpdateName, handleUpdateText}
}




const StudentLevelEditContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentLevelEditComponent)

export default StudentLevelEditContainer;