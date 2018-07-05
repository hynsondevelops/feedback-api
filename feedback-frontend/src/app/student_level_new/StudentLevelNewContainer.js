import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import StudentLevelNewComponent from './StudentLevelNewComponent';
import fetchStudentLevelOp from './duck/operations';
import { onComponentDidMount } from 'react-redux-lifecycle'
import {createStudentLevelOp, newStudentLevelOp} from './duck/operations';
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
    const addSentence = (event, level) => {
    	dispatch(addRandomSentenceOp(event, level))
    }
    const removeSentence = (event) => {
    	dispatch(removeRandomSentenceOp(event))
    }
    const updateSentence = (event, index, level) => {
    	dispatch(updateRandomSentenceOp(event, index, level))
    }
    const createStudentLevel = (event, token, level) => {
    	dispatch(createStudentLevelOp(event, token, level))
    }
    const handleUpdateName = (event, name, level) => {
        dispatch(updateStudentLevelNameOp(event, name, level))
    }
    const handleUpdateText = (event, text, level) => {
        dispatch(updateStudentLevelTextOp(event, text, level))
    }
    const newStudentLevel = () => {
        dispatch(newStudentLevelOp())
    }
    return {addSentence, removeSentence, updateSentence, createStudentLevel, handleUpdateName, handleUpdateText, newStudentLevel}
}




const StudentLevelNewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentLevelNewComponent)

export default StudentLevelNewContainer;