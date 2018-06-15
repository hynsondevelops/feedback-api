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
    const addSentence = (event) => {
    	dispatch(addRandomSentenceOp(event))
    }
    const removeSentence = (event) => {
    	dispatch(removeRandomSentenceOp(event))
    }
    const updateSentence = (event) => {
    	dispatch(updateRandomSentenceOp(event))
    }
    const createStudentLevel = (event) => {
    	dispatch(createStudentLevelOp(event))
    }
    const handleUpdateName = (event) => {
        dispatch(updateStudentLevelNameOp(event))
    }
    const handleUpdateText = (event) => {
        dispatch(updateStudentLevelTextOp(event))
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