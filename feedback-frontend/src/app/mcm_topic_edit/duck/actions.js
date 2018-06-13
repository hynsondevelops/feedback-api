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

export function updateMcmTopic(mcm_topic_edit) {
  return {
    type: types.UPDATE_MCM_TOPIC_EDIT,
    mcm_topic_edit
  }
}