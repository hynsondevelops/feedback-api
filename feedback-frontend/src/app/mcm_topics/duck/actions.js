import types from './types.js'


export function getMcmIndex(mcm_index) {
  return {
    type: types.GET_MCM_TOPICS,
    mcm_index
  }
}

export function invalidateMcmTopics() {
  return {
    type: types.INVALIDATE_MCM_TOPICS,
  }
}

export function requestMcmTopics() {
  return {
    type: types.REQUEST_MCM_TOPICS,
  }
}

export function receiveMcmTopics(mcm_index) {
  return {
    type: types.RECEIVE_MCM_TOPICS,
    mcm_index,
    receivedAt: Date.now()
  }
}
