import {generateStudentLevelFeedback} from './actions.js'

export function generateStudentLevelFeedbackOp(event) {
  return function (dispatch) {
    let student_name = document.getElementById("student_name").value
    let gender = document.getElementById("female").checked
    let intro = document.getElementById("intro").value
    let conclusion = document.getElementById("conclusion").value
    let feedback = intro + " "
    const student_level_index = JSON.parse(event.target.dataset.index)
    let student_level = ""
    for (let i = 0; i < student_level_index.length; i++) {
      let student_level_button = document.getElementById(student_level_index[i].name)
      if (student_level_button.checked) {
        student_level = student_level_index[i]
      }
    }
    let generic_text = student_level.generic_text.replace(/name/g, student_name)
    let generic_text_box = document.getElementById("student_level_generic")
    while (feedback.length < 100) {
      let randomIndex = Math.floor(Math.random() * student_level.random_sentences.length);
      feedback += student_level.random_sentences[randomIndex].sentence + " "
    }
    feedback += conclusion
    feedback = feedback.replace(/name/g, student_name)
    feedback = feedback.replace(/boy/g, student_name)

    if (gender) {//female
      feedback = feedback.replace(/He/g, "She")
      feedback = feedback.replace(/His/g, "Her")
      generic_text = generic_text.replace(/He/g, "She")
      generic_text = generic_text.replace(/His/g, "Her")

    }
    generic_text_box.value = generic_text

    dispatch(generateStudentLevelFeedback(feedback))
  }
}

export default generateStudentLevelFeedbackOp;
