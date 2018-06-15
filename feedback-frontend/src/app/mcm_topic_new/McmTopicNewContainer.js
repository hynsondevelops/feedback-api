import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import McmTopicNewComponent from './McmTopicNewComponent';
import { onComponentDidMount } from 'react-redux-lifecycle'
import {createMcmTopicOp, newMcmTopicOp} from './duck/operations';
import {addSentenceScoreEdit, removeSentenceScoreEdit, updateSentenceScoreEdit, updateMcmTopicNameOp} from '../common/duck/operations'

const mapStateToProps = state => {
	const { mcm_topic_edit } = state.mcm_topic_edit;
	const { token } = state.home
	return { mcm_topic_edit, token }
};

//getMcmTopic
//addSentence
//removeSentence
const mapDispatchToProps = (dispatch) => {
    const addSentence = (event) => {
    	dispatch(addSentenceScoreEdit(event))
    }
    const removeSentence = (event) => {
    	dispatch(removeSentenceScoreEdit(event))
    }
    const updateSentence = (event) => {
    	dispatch(updateSentenceScoreEdit(event))
    }
    const createMcmTopic = (event) => {
    	dispatch(createMcmTopicOp(event))
    }
    const newMcmTopic = () => {
    	dispatch(newMcmTopicOp())
    }
    const handleUpdateName = (event) => {
        dispatch(updateMcmTopicNameOp(event))
    }
    return { addSentence, removeSentence, updateSentence, createMcmTopic, newMcmTopic, handleUpdateName}
}




const McmTopicNewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(McmTopicNewComponent)

export default McmTopicNewContainer;