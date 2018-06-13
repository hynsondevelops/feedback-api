import types from './types.js'

export function addSentenceScore(mcm_topic_edit) {
  return {
    type: types.ADD_SENTENCE_SCORE,
    mcm_topic_edit
  }
}


export function removeSentenceScore(mcm_topic_edit) {
  return {
    type: types.REMOVE_SENTENCE_SCORE,
    mcm_topic_edit
  }
}

export function updateSentenceScore(mcm_topic_edit) {
  return {
    type: types.UPDATE_SENTENCE_SCORE,
    mcm_topic_edit
  }
}