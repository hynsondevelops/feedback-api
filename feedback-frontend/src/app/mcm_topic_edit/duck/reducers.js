import types from './types';

const INITIAL_STATE = {
	mcm_topic_edit: null
}



function mcmTopicEditReducer(state = {}, action){
  switch(action.type){
    case types.INVALIDATE_MCM_TOPIC_EDIT: 
    	return Object.assign({}, state, {
    		didInvalidate: true
    	})
    case types.REQUEST_MCM_TOPIC_EDIT: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: true
    	})
    case types.RECEIVE_MCM_TOPIC_EDIT: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: false,
    		mcm_topic_edit: action.mcm_topic_edit,
    		lastUpdate: action.receivedAt
    	})
    case types.ADD_SENTENCE_SCORE: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    case types.REMOVE_SENTENCE_SCORE: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    case types.UPDATE_SENTENCE_SCORE: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    case types.UPDATE_MCM_TOPIC: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    default:
      return state;
  }
}

export default mcmTopicEditReducer;
