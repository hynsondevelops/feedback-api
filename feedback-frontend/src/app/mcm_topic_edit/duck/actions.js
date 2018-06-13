import types from './types.js'



export function invalidateMcmTopicEdit() {
  return {
    type: types.INVALIDATE_MCM_TOPIC_EDIT,
  }
}

export function requestMcmTopicEdit(mcm_topic_edit) {
  return {
    type: types.REQUEST_MCM_TOPIC_EDIT,
    mcm_topic_edit
  }
}

export function receiveMcmTopicEdit(mcm_topic_edit) {
  return {
    type: types.RECEIVE_MCM_TOPIC_EDIT,
    mcm_topic_edit,
    receivedAt: Date.now()
  }
}

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

export function updateMcmTopic(mcm_topic_edit) {
  return {
    type: types.UPDATE_MCM_TOPIC_EDIT,
    mcm_topic_edit
  }
}