import types from './types';

const INITIAL_STATE = {
	email: "",
	auth_token: null
}

function mcmFeedbackGeneratorReducer(state = {}, action){
	console.log(action.type)
  switch(action.type){
    case types.VIEW_MCM_FEEDBACK_GENERATOR:
      return {yes: "woo"}
    case types.GENERATE_MCM_FEEDBACK:
      return {feedback: action.feedback}
    default:
      return state;
  }
}


export default mcmFeedbackGeneratorReducer