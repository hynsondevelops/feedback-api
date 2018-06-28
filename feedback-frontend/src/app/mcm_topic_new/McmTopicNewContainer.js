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
    const addSentence = (event, topic) => {
    	dispatch(addSentenceScoreEdit(event, topic))
    }
    const removeSentence = (event) => {
    	dispatch(removeSentenceScoreEdit(event))
    }
    const updateSentence = (event, index, topic) => {
    	dispatch(updateSentenceScoreEdit(event, index, topic))
    }
    const createMcmTopic = (event, token, topic) => {
    	dispatch(createMcmTopicOp(event, token, topic))
    }
    const newMcmTopic = () => {
    	dispatch(newMcmTopicOp())
    }
    const handleUpdateName = (event, name, topic) => {
        dispatch(updateMcmTopicNameOp(event, name, topic))
    }
    return { addSentence, removeSentence, updateSentence, createMcmTopic, newMcmTopic, handleUpdateName}
}




const McmTopicNewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(McmTopicNewComponent)

export default McmTopicNewContainer;