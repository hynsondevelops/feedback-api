import {getStudentLevelIndex, invalidateStudentLevels, requestStudentLevels, receiveStudentLevels} from './actions.js'
let axios = require('axios');


function fetchStudentLevels(token) {
  return function (dispatch) {
    dispatch(requestStudentLevels())
    let axiosClient = axios.create({
      baseURL: 'https://feedback-friend.herokuapp.com',
      headers: {'Authorization': token}
    });
    return axiosClient
    .get(`/student_levels`)
    .then(response => {
      console.log(response.data)
      dispatch(receiveStudentLevels(response.data))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }

}

export default fetchStudentLevels;