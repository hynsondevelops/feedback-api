import commonTypes from './types';
import editTypes from '../../mcm_topic_edit/duck/types'
const INITIAL_STATE = {
	mcm_topic_edit: null
}



function mcmTopicEditReducer(state = {}, action){
  switch(action.type){
    case editTypes.INVALIDATE_MCM_TOPIC_EDIT: 
    	return Object.assign({}, state, {
    		didInvalidate: true
    	})
    case editTypes.REQUEST_MCM_TOPIC_EDIT: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: true
    	})
    case editTypes.RECEIVE_MCM_TOPIC_EDIT: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: false,
    		mcm_topic_edit: action.mcm_topic_edit,
    		lastUpdate: action.receivedAt
    	})
    case commonTypes.ADD_SENTENCE_SCORE: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    case commonTypes.REMOVE_SENTENCE_SCORE: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    case commonTypes.UPDATE_SENTENCE_SCORE: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    case editTypes.UPDATE_MCM_TOPIC: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    default:
      return state;
  }
}

export default mcmTopicEditReducer;
