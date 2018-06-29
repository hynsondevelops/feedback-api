import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import McmTopicEditComponent from './McmTopicEditComponent';
import fetchMcmTopicEdit from './duck/operations';
import { onComponentDidMount } from 'react-redux-lifecycle'
import {updateMcmTopicEdit} from './duck/operations';
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
	const getMcmTopic = (token, mcm_topic_edit_id) => {
    	dispatch(fetchMcmTopicEdit(token, mcm_topic_edit_id));
    }
    console.log(addSentenceScoreEdit)
    const addSentence = (event, topic) => {
        dispatch(addSentenceScoreEdit(event, topic))
    }
    const removeSentence = (event) => {
    	dispatch(removeSentenceScoreEdit(event))
    }
    const updateSentence = (event, index, topic) => {
        dispatch(updateSentenceScoreEdit(event, index, topic))
    }
    const updateMcmTopic = (event, token, topic) => {
    	dispatch(updateMcmTopicEdit(event, token, topic))
    }
    const handleUpdateName = (event, name, topic) => {
        dispatch(updateMcmTopicNameOp(event, name, topic))
    }
    return {getMcmTopic, addSentence, removeSentence, updateSentence, updateMcmTopic, handleUpdateName}
}





const McmTopicEditContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(McmTopicEditComponent)

export default McmTopicEditContainer;