import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import McmTopicsComponent from './McmTopicsComponent';
import fetchMcmTopics from './duck/operations';
import { onComponentDidMount } from 'react-redux-lifecycle'


const mapStateToProps = state => {
	const { mcm_index } = state.mcm_index;
	const { token } = state.home
	return { mcm_index, token }
};

const mapDispatchToProps = (dispatch) => {
	const getMcmIndex = (token) => {
    	dispatch(fetchMcmTopics(token));
    }
    return {getMcmIndex}
}




const McmTopicsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(McmTopicsComponent)

export default McmTopicsContainer;