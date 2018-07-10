import types from './types.js'


export function viewMcmFeedbackGenerator() {
  return {
    type: types.VIEW_MCM_FEEDBACK_GENERATOR
  }
}


export function generateMcmFeedback(goodFeedback, improvementFeedback) {
  return {
    type: types.GENERATE_MCM_FEEDBACK,
    goodFeedback,
    improvementFeedback
  }
}
