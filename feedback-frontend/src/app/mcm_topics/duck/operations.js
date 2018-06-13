import {getMcmIndex, invalidateMcmTopics, requestMcmTopics, receiveMcmTopics} from './actions.js'
let axios = require('axios');


function fetchMcmTopics(token) {
  return function (dispatch) {
    dispatch(requestMcmTopics())
    let axiosClient = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': token}
    });
    return axiosClient
    .get(`/mcm_topics`)
    .then(response => {
      dispatch(receiveMcmTopics(response.data))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }

}

export default fetchMcmTopics;