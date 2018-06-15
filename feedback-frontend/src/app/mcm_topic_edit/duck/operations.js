import {requestMcmTopicEdit, receiveMcmTopicEdit, updateMcmTopic} from './actions.js'
let axios = require('axios');

const emptySentenceScore = {
    sentence: '',
    score: '',
    id: null,
    errors: {},
    _destroy: false
};

function fetchMcmTopicEdit(token, mcm_topic_edit_id) {
  return function (dispatch) {
    dispatch(requestMcmTopicEdit())
    let axiosClient = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': token}
    });
    return axiosClient
    .get(`/mcm_topics/${mcm_topic_edit_id}`)
    .then(response => {
      let mcm_topic = response.data
      mcm_topic.sentence_scores_attributes = mcm_topic.sentence_scores;
      console.log(mcm_topic.sentence_scores_attributes)
      for (let i = 0; i < mcm_topic.sentence_scores_attributes.length; i++) {
        mcm_topic.sentence_scores_attributes[i]._destroy = false
      }
      mcm_topic.sentence_scores = undefined
      dispatch(receiveMcmTopicEdit(mcm_topic))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }

}

export function updateMcmTopicEdit(event) {
  return function (dispatch) {
    let token = event.target.dataset.token
    let topic = JSON.parse(event.target.dataset.topic)
    console.log(topic)
    let axiosClient = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': token}
    });
    return axiosClient
    .patch(`/mcm_topics/${topic.id}`, {mcm_topic: topic})
    .then(response => {
      let mcm_topic = response.data
      mcm_topic.sentence_scores_attributes = mcm_topic.sentence_scores;
      console.log(mcm_topic.sentence_scores_attributes)
      for (let i = 0; i < mcm_topic.sentence_scores_attributes.length; i++) {
        mcm_topic.sentence_scores_attributes[i]._destroy = false
      }
      mcm_topic.sentence_scores = undefined
      dispatch(updateMcmTopic(mcm_topic))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }
}

export default fetchMcmTopicEdit;