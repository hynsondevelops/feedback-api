import types from './types.js'


export function viewStudentLevelFeedbackGenerator() {
  return {
    type: types.VIEW_STUDENT_LEVEL_FEEDBACK_GENERATOR
  }
}


export function generateStudentLevelFeedback(feedback) {
  return {
    type: types.GENERATE_STUDENT_LEVEL_FEEDBACK,
    feedback
  }
}
