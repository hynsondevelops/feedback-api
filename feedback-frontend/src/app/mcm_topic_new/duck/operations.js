import {createMcmTopicNew, initMcmTopicNew} from './actions.js'
let axios = require('axios');

const emptyTopic = {
  name: "",
  sentence_scores_attributes: []
}

export function createMcmTopicOp(event) {
  return function (dispatch) {
    let token = event.target.dataset.token
    let topic = JSON.parse(event.target.dataset.topic)
    let name = document.getElementById("mcm_topic_name").value
    topic.name = name
    for (let i = 0; i < topic.sentence_scores_attributes.length; i++) {
      topic.sentence_scores_attributes[i].errors = undefined
    }
    let axiosClient = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': token}
    });
    return axiosClient
    .post(`/mcm_topics`, {mcm_topic: topic})
    .then(response => {
      dispatch(createMcmTopicNew(topic))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }
}

export function newMcmTopicOp() {
  return function (dispatch) {
    dispatch(initMcmTopicNew(emptyTopic))
  }
}
