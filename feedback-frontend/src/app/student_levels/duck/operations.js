import {getStudentLevelIndex, invalidateStudentLevels, requestStudentLevels, receiveStudentLevels} from './actions.js'
import axiosClient from '../../../axiosClient';



function fetchStudentLevels(token) {
  return function (dispatch) {
    dispatch(requestStudentLevels())
    return axiosClient
    .get(`/student_levels`, {headers: {'Authorization': token}})
    .then(response => {
      dispatch(receiveStudentLevels(response.data))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }

}

export default fetchStudentLevels;