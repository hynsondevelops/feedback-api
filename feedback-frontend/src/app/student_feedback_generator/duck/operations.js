import {generateStudentLevelFeedback} from './actions.js'
let axios = require('axios');

export function generateStudentLevelFeedbackOp(event) {
  return function (dispatch) {
    let feedback = ""
    const student_level_index = JSON.parse(event.target.dataset.index)
    console.log(student_level_index)
    let student_level = ""
    console.log(student_level_index)
    for (let i = 0; i < student_level_index.length; i++) {
      let student_level_button = document.getElementById(student_level_index[i].name)
      console.log(i)
      console.log(student_level_button)
      if (student_level_button.checked) {
        student_level = student_level_index[i]
      }
    }
    console.log(student_level)
    while (feedback.length < 100) {
      let randomIndex = Math.floor(Math.random() * student_level.random_sentences.length);
      feedback += student_level.random_sentences[randomIndex].sentence 
    }
    console.log(feedback)

    dispatch(generateStudentLevelFeedback(feedback))
  }
}

export default generateStudentLevelFeedbackOp;
