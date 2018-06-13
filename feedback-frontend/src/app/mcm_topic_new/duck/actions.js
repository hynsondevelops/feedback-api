import types from './types.js'

export function createMcmTopicNew(mcm_topic_edit) {
  return {
    type: types.CREATE_MCM_TOPIC,
    mcm_topic_edit
  }
}

export function initMcmTopicNew(mcm_topic_edit) {
  return {
    type: types.NEW_MCM_TOPIC,
    mcm_topic_edit
  }
}