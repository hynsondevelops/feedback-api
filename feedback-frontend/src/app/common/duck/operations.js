import {addSentenceScore, removeSentenceScore, updateSentenceScore} from './actions.js'
let axios = require('axios');

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