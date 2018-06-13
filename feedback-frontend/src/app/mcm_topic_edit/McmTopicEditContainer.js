import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import McmTopicEditComponent from './McmTopicEditComponent';
import fetchMcmTopicEdit from './duck/operations';
import { onComponentDidMount } from 'react-redux-lifecycle'
import {updateMcmTopicEdit} from './duck/operations';
import {addSentenceScoreEdit, removeSentenceScoreEdit, updateSentenceScoreEdit} from '../common/duck/operations'

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
    const addSentence = (event) => {
    	dispatch(addSentenceScoreEdit(event))
    }
    const removeSentence = (event) => {
    	dispatch(removeSentenceScoreEdit(event))
    }
    const updateSentence = (event) => {
    	dispatch(updateSentenceScoreEdit(event))
    }
    const updateMcmTopic = (event) => {
    	dispatch(updateMcmTopicEdit(event))
    }
    return {getMcmTopic, addSentence, removeSentence, updateSentence, updateMcmTopic}
}




const McmTopicEditContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(McmTopicEditComponent)

export default McmTopicEditContainer;