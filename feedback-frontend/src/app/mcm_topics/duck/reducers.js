import types from './types';

const INITIAL_STATE = {
	mcm_index: null
}



function mcmIndexReducer(state = {}, action){
  switch(action.type){
    case types.GET_MCM_TOPICS:
      return action.mcm_index
    case types.INVALIDATE_MCM_TOPICS: 
    	return Object.assign({}, state, {
    		didInvalidate: true
    	})
    case types.REQUEST_MCM_TOPICS: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: true
    	})
    case types.RECEIVE_MCM_TOPICS: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: false,
    		mcm_index: action.mcm_index,
    		lastUpdate: action.receivedAt
    	})
    default:
      return state;
  }
}

export default mcmIndexReducer;
