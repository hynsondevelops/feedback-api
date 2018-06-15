import commonTypes from './types';
import mcmEditTypes from '../../mcm_topic_edit/duck/types'
import mcmNewTypes from '../../mcm_topic_new/duck/types'
import studentEditTypes from '../../student_level_edit/duck/types'
import studentNewTypes from '../../student_level_new/duck/types'

//Mcm Topic
const INITIAL_MCM_TOPIC_STATE = {
	 mcm_topic_edit: {
      name: "",
      sentence_scores_attributes: []
    }
}



export function mcmTopicEditReducer(state = {}, action){
  switch(action.type){
    case mcmEditTypes.INVALIDATE_MCM_TOPIC_EDIT: 
    	return Object.assign({}, state, {
    		didInvalidate: true
    	})
    case mcmEditTypes.REQUEST_MCM_TOPIC_EDIT: 
    	return Object.assign({}, state, {
    		didInvalidate: false,
    		isFetching: true
    	})
    case mcmEditTypes.RECEIVE_MCM_TOPIC_EDIT: 
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
    case commonTypes.UPDATE_MCM_TOPIC_NAME: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    case mcmEditTypes.UPDATE_MCM_TOPIC_EDIT: 
        return Object.assign({}, state, {
            mcm_topic_edit: action.mcm_topic_edit
        })
    case mcmNewTypes.CREATE_MCM_TOPIC: 
    	return Object.assign({}, state, {
    	    mcm_topic_edit: action.mcm_topic_edit
    	})
    case mcmNewTypes.NEW_MCM_TOPIC: 
    	return Object.assign({}, state, {
    	    mcm_topic_edit: action.mcm_topic_edit
    	})
    default:
      return INITIAL_MCM_TOPIC_STATE;
  }
}

const INITIAL_STUDENT_LEVEL_STATE = {
     student_level: {
      name: "",
      random_sentences_attributes: []
    }
}


//Student Level
export function studentLevelReducer(state = {}, action){
  switch(action.type){
    case studentEditTypes.INVALIDATE_STUDENT_LEVEL: 
        return Object.assign({}, state, {
            didInvalidate: true
        })
    case studentEditTypes.REQUEST_STUDENT_LEVEL: 
        return Object.assign({}, state, {
            didInvalidate: false,
            isFetching: true
        })
    case studentEditTypes.RECEIVE_STUDENT_LEVEL: 
        return Object.assign({}, state, {
            didInvalidate: false,
            isFetching: false,
            student_level: action.student_level,
            lastUpdate: action.receivedAt
        })
    case commonTypes.ADD_RANDOM_SENTENCE: 
        return Object.assign({}, state, {
            student_level: action.student_level
        })
    case commonTypes.REMOVE_RANDOM_SENTENCE: 
        return Object.assign({}, state, {
            student_level: action.student_level
        })
    case commonTypes.UPDATE_RANDOM_SENTENCE: 
        return Object.assign({}, state, {
            student_level: action.student_level
        })
    case commonTypes.UPDATE_STUDENT_LEVEL_NAME:
        return Object.assign({}, state, {
            student_level: action.student_level
        })
    case commonTypes.UPDATE_STUDENT_LEVEL_TEXT:
        return Object.assign({}, state, {
            student_level: action.student_level
        })
    case studentEditTypes.UPDATE_STUDENT_LEVEL: 
        return Object.assign({}, state, {
            student_level: action.student_level
        })
    case studentNewTypes.CREATE_STUDENT_LEVEL: 
        return Object.assign({}, state, {
            student_level: action.student_level
        })
    case studentNewTypes.NEW_STUDENT_LEVEL: 
        return Object.assign({}, state, {
            student_level: action.student_level
        })
    default:
      return INITIAL_STUDENT_LEVEL_STATE;
  }
}

