import {getMcmIndex, invalidateMcmTopics, requestMcmTopics, receiveMcmTopics} from './actions.js'
import axiosClient from '../../../axiosClient';


function fetchMcmTopics(token) {
  return function (dispatch) {
    dispatch(requestMcmTopics())
    return axiosClient
    .get(`/mcm_topics`, {headers: {'Authorization': token}})
    .then(response => {
      let index = response.data
      for (let i = 0; i < index.length; i++) {
        index[i].sentence_scores.sort(function(a, b) { return a.score - b.score})
      }

      dispatch(receiveMcmTopics(index))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }

}

export default fetchMcmTopics;