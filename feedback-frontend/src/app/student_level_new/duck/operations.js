import {createStudentLevelNew, initStudentLevelNew} from './actions.js'
import { history } from '../../../index.js'

let axios = require('axios');



export function createStudentLevelOp(event, token, level) {
  return function (dispatch) {
    for (let i = 0; i < level.random_sentences_attributes.length; i++) {
      level.random_sentences_attributes[i].errors = undefined
    }
    let axiosClient = axios.create({
      baseURL: 'https://boiling-temple-96661.herokuapp.com',
      headers: {'Authorization': token}
    });
    return axiosClient
    .post(`/student_levels`, {student_level: level})
    .then(response => {
      let student_level = response.data
      student_level.random_sentences_attributes = student_level.random_sentences;
      console.log(student_level.random_sentences_attributes)
      for (let i = 0; i < student_level.random_sentences_attributes.length; i++) {
        student_level.random_sentences_attributes[i]._destroy = false
      }
      student_level.random_sentences = undefined
      dispatch(createStudentLevelNew(student_level))
    })
    .catch(error => {
      console.log("An error occured", error)
    }); 
  }
}

export function newStudentLevelOp() {
  return function (dispatch) {
    dispatch(initStudentLevelNew(
      {
        name: "",
        generic_text: "",
        random_sentences_attributes: []
      }
    ))
  }
}

