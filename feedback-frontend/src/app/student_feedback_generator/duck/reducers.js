import types from './types';

const INITIAL_STATE = {
	email: "",
	auth_token: null
}

function studentLevelFeedbackGeneratorReducer(state = {}, action){
	console.log(action.type)
  switch(action.type){
    case types.VIEW_STUDENT_LEVEL_FEEDBACK_GENERATOR:
      return {yes: "woo"}
    case types.GENERATE_STUDENT_LEVEL_FEEDBACK:
      return {feedback: action.feedback}
    default:
      return state;
  }
}


export default studentLevelFeedbackGeneratorReducer