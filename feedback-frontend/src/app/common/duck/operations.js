import {addSentenceScore, removeSentenceScore, updateSentenceScore, addRandomSentence, removeRandomSentence, updateRandomSentence, updateMcmTopicName, updateStudentLevelText, updateStudentLevelName} from './actions.js'
let axios = require('axios');

//Mcm Topics
const emptySentenceScore = {
    sentence: '',
    score: '',
    id: null,
    errors: {},
    _destroy: false
};

export function addSentenceScoreEdit(event) {
  return function (dispatch) {
    let topic = JSON.parse(event.target.dataset.topic)
    console.log(JSON.parse(event.target.dataset.topic))
    topic.sentence_scores_attributes.push(emptySentenceScore)
    return dispatch(addSentenceScore(topic))
  }
}

export function removeSentenceScoreEdit(event) {
  return function (dispatch) {
    let topic = JSON.parse(event.target.dataset.topic)
    let sentence_index = event.target.dataset.sentence_index
    console.log(topic.sentence_scores_attributes)
    console.log(sentence_index)
    topic.sentence_scores_attributes.splice(sentence_index, 1)
    console.log(topic.sentence_scores_attributes)
    console.log(sentence_index)
    return dispatch(removeSentenceScore(topic))
  }
}

export function updateSentenceScoreEdit(event) {
  return function (dispatch) {
    let index = parseInt(event.target.dataset.index)
    let sentence = document.getElementById("sentence-" + index).value
    let score = parseInt(document.getElementById("score-" + index).value)
    let topic = JSON.parse(event.target.dataset.topic)
    console.log(topic)
    topic.sentence_scores_attributes[index].sentence = sentence
    topic.sentence_scores_attributes[index].score = score
    return dispatch(updateSentenceScore(topic))
  }
}

export function updateMcmTopicNameOp(event) {
  return function (dispatch) {
    let newName = document.getElementById("mcm_topic_name").value
    let topic = JSON.parse(event.target.dataset.topic)
    topic.name = newName
    return dispatch(updateMcmTopicName(topic))
  }
}


//Student Level
const emptyRandomSentence = {
    sentence: '',
    id: null,
    errors: {},
    _destroy: false
};

export function addRandomSentenceOp(event) {
  return function (dispatch) {
    let level = JSON.parse(event.target.dataset.level)
    console.log(JSON.parse(event.target.dataset.level))
    level.random_sentences_attributes.push(emptyRandomSentence)
    return dispatch(addRandomSentence(level))
  }
}

export function removeRandomSentenceOp(event) {
  return function (dispatch) {
    let level = JSON.parse(event.target.dataset.level)
    let sentence_index = event.target.dataset.sentence_index
    console.log(level.random_sentences_attributes)
    console.log(sentence_index)
    level.random_sentences_attributes.splice(sentence_index, 1)
    console.log(level.random_sentences_attributes)
    console.log(sentence_index)
    return dispatch(removeRandomSentence(level))
  }
}

export function updateRandomSentenceOp(event) {
  return function (dispatch) {
    let index = parseInt(event.target.dataset.index)
    let sentence = document.getElementById("sentence-" + index).value
    let level = JSON.parse(event.target.dataset.level)
    console.log(level)
    level.random_sentences_attributes[index].sentence = sentence
    return dispatch(updateRandomSentence(level))
  }
}

export function updateStudentLevelNameOp(event) {
  return function (dispatch) {
    let newName = document.getElementById("student_level_name").value
    console.log(JSON.parse(event.target.dataset.level))
    let level = JSON.parse(event.target.dataset.level)
    level.name = newName
    return dispatch(updateStudentLevelName(level))
  }
}

export function updateStudentLevelTextOp(event) {
  return function (dispatch) {
    let newText = document.getElementById("student_level_text").value
    console.log(JSON.parse(event.target.dataset.level))

    let level = JSON.parse(event.target.dataset.level)
    level.generic_text = newText
    return dispatch(updateStudentLevelText(level))
  }
}
