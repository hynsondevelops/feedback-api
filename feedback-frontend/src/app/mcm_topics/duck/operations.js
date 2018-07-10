import {getMcmIndex, invalidateMcmTopics, requestMcmTopics, receiveMcmTopics} from './actions.js'
let axios = require('axios');


function fetchMcmTopics(token) {
  return function (dispatch) {
    dispatch(requestMcmTopics())
    let axiosClient = axios.create({
      baseURL: 'https://feedback-friend.herokuapp.com',
      headers: {'Authorization': token}
    });
    return axiosClient
    .get(`/mcm_topics`)
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