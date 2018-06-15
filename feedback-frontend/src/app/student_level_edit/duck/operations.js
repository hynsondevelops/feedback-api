import {requestStudentLevel, receiveStudentLevel, updateStudentLevel} from './actions.js'
let axios = require('axios');

const emptyRandomSentence = {
    sentence: '',
    id: null,
    errors: {},
    _destroy: false
};

function fetchStudentLevelOp(token, student_level_id) {
  return function (dispatch) {
    dispatch(requestStudentLevel())
    let axiosClient = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': token}
    });
    return axiosClient
    .get(`/student_levels/${student_level_id}`)
    .then(response => {
      let student_level = response.data
      student_level.random_sentences_attributes = student_level.random_sentences;
      console.log(student_level.random_sentences_attributes)
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

export function updateStudentLevelOp(event) {
  return function (dispatch) {
    let token = event.target.dataset.token
    let level = JSON.parse(event.target.dataset.level)
    console.log(level)
    let axiosClient = axios.create({
      baseURL: 'http://localhost:3000',
      headers: {'Authorization': token}
    });
    return axiosClient
    .patch(`/student_levels/${level.id}`, {student_level: level})
    .then(response => {
      let student_level = response.data
      student_level.random_sentences_attributes = student_level.random_sentences;
      console.log(student_level.random_sentences_attributes)
      for (let i = 0; i < student_level.random_sentences_attributes.length; i++) {
        student_level.random_sentences_attributes[i]._destroy = false
      }
      student_level.random_sentences = undefined
      dispatch(updateStudentLevel(student_level))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }
}

export default fetchStudentLevelOp;