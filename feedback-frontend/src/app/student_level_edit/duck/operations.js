import {requestStudentLevel, receiveStudentLevel, updateStudentLevel} from './actions.js'
import axiosClient from '../../../axiosClient';

const emptyRandomSentence = {
    sentence: '',
    id: null,
    errors: {},
    _destroy: false
};

function fetchStudentLevelOp(token, student_level_id) {
  return function (dispatch) {
    dispatch(requestStudentLevel())
    return axiosClient
    .get(`/student_levels/${student_level_id}`, {headers: {'Authorization': token}})
    .then(response => {
      let student_level = response.data
      student_level.random_sentences_attributes = student_level.random_sentences;
      for (let i = 0; i < student_level.random_sentences_attributes.length; i++) {
        student_level.random_sentences_attributes[i]._destroy = false
      }
      student_level.random_sentences = undefined
      dispatch(receiveStudentLevel(student_level))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }

}

export function updateStudentLevelOp(event, token, level) {
  return function (dispatch) {
    return axiosClient
    .patch(`/student_levels/${level.id}`, {student_level: level}, {headers: {'Authorization': token}})
    .then(response => {
      let student_level = response.data
      student_level.random_sentences_attributes = student_level.random_sentences;
      for (let i = 0; i < student_level.random_sentences_attributes.length; i++) {
        student_level.random_sentences_attributes[i]._destroy = false
      }
      student_level.random_sentences = undefined
      dispatch(updateStudentLevel(student_level))
      let link = document.getElementById("student_level_index_link")
      link.click();
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }
}

export default fetchStudentLevelOp;