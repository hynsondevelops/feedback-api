import {createMcmTopicNew, initMcmTopicNew} from './actions.js'
import axiosClient from '../../../axiosClient';


export function createMcmTopicOp(event, token, topic) {
  return function (dispatch) {
    let name = document.getElementById("mcm_topic_name").value
    topic.name = name
    for (let i = 0; i < topic.sentence_scores_attributes.length; i++) {
      topic.sentence_scores_attributes[i].errors = undefined
    }
    return axiosClient
    .post(`/mcm_topics`, {mcm_topic: topic}, {headers: {'Authorization': token}})
    .then(response => {
      let mcm_topic = response.data
      mcm_topic.sentence_scores_attributes = mcm_topic.sentence_scores;
      for (let i = 0; i < mcm_topic.sentence_scores_attributes.length; i++) {
        mcm_topic.sentence_scores_attributes[i]._destroy = false
      }
      mcm_topic.sentence_scores = undefined
      dispatch(createMcmTopicNew(mcm_topic))
    })
    .then(response => {
      dispatch(initMcmTopicNew(
        {
          name: "",
          sentence_scores_attributes: []
        }
      ))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }
}

export function newMcmTopicOp() {
  return function (dispatch) {
    dispatch(initMcmTopicNew(
    {
      name: "",
      sentence_scores_attributes: []
    }
    ))
  }
}

