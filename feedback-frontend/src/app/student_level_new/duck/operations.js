import {createStudentLevelNew, initStudentLevelNew} from './actions.js'
import { history } from '../../../index.js'

let axios = require('axios');

const emptyLevel = {
  name: "",
  generic_text: "",
  random_sentences_attributes: []
}

export function createStudentLevelOp(event) {
  return function (dispatch) {
    let token = event.target.dataset.token
    let level = JSON.parse(event.target.dataset.level)
    let name = document.getElementById("student_level_name").value
    let text = document.getElementById("student_level_text").value
    level.name = name
    level.generic_text = text
    for (let i = 0; i < level.random_sentences_attributes.length; i++) {
      level.random_sentences_attributes[i].errors = undefined
    }
    let axiosClient = axios.create({
      baseURL: 'http://localhost:3000',
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
    dispatch(initStudentLevelNew(emptyLevel))
  }
}

