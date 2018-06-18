import types from './types';

const INITIAL_STATE = {
	student_level_index: null
}



function studentLevelReducer(state = {}, action){
  switch(action.type){
    case types.GET_STUDENT_LEVELS:
      return action.student_level_index
    case types.INVALIDATE_STUDENT_LEVELS: 
    	return Object.assign({}, state, {
    		didInvalidate: true
    	})
    case types.REQUEST_STUDENT_LEVELS: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: true
    	})
    case types.RECEIVE_STUDENT_LEVELS: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: false,
    		student_level_index: action.student_level_index,
    		lastUpdate: action.receivedAt
    	})
    default:
      return state;
  }
}

export default studentLevelReducer;
