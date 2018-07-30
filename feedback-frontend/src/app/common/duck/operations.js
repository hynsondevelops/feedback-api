import {addSentenceScore, removeSentenceScore, updateSentenceScore, addRandomSentence, removeRandomSentence, updateRandomSentence, updateMcmTopicName, updateStudentLevelText, updateStudentLevelName} from './actions.js'

//Mcm Topics

export function addSentenceScoreEdit(event, topic) {
  return function (dispatch) {
    const emptySentenceScore = {
        sentence: '',
        score: '',
        id: null,
        quality: false,
        errors: {},
        _destroy: false
    };
    topic.sentence_scores_attributes.push(emptySentenceScore)
    return dispatch(addSentenceScore(topic))
  }
}

export function removeSentenceScoreEdit(event) {
  return function (dispatch) {
    let topic = JSON.parse(event.target.dataset.topic)
    let sentence_index = event.target.dataset.sentence_index
    topic.sentence_scores_attributes[sentence_index]._destroy = true
    return dispatch(removeSentenceScore(topic))
  }
}

export function updateSentenceScoreEdit(event, index, topic) {
  return function (dispatch) {
    let sentence = document.getElementById("sentence-" + index).value
    let score = parseInt(document.getElementById("score-" + index).value)
    let quality = document.getElementById("quality-" + index).value
    topic.sentence_scores_attributes[index].sentence = sentence
    topic.sentence_scores_attributes[index].score = score
    topic.sentence_scores_attributes[index].quality = quality
    return dispatch(updateSentenceScore(topic))
  }
}

export function updateMcmTopicNameOp(event, name, topic) {
  return function (dispatch) {
    topic.name = name
    return dispatch(updateMcmTopicName(topic))
  }
}


//Student Level

export function addRandomSentenceOp(event, level) {
  return function (dispatch) {
    const emptyRandomSentence = {
        sentence: '',
        id: null,
        errors: {},
        _destroy: false
    };
    level.random_sentences_attributes.push(emptyRandomSentence)
    return dispatch(addRandomSentence(level))
  }
}

export function removeRandomSentenceOp(event) {
  return function (dispatch) {
    let level = JSON.parse(event.target.dataset.level)
    let sentence_index = event.target.dataset.sentence_index
    level.random_sentences_attributes[sentence_index]._destroy = true
    return dispatch(removeRandomSentence(level))
  }
}

export function updateRandomSentenceOp(event, index, level) {
  return function (dispatch) {
    let sentence = document.getElementById("sentence-" + index).value
    level.random_sentences_attributes[index].sentence = sentence
    return dispatch(updateRandomSentence(level))
  }
}

export function updateStudentLevelNameOp(event, name, level) {
  return function (dispatch) {
    level.name = name
    return dispatch(updateStudentLevelName(level))
  }
}

export function updateStudentLevelTextOp(event, text, level) {
  return function (dispatch) {
    level.generic_text = text
    return dispatch(updateStudentLevelText(level))
  }
}
