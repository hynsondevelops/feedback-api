import types from './types.js'


export function getStudentLevelIndex(student_level_index) {
  return {
    type: types.GET_STUDENT_LEVELS,
    student_level_index
  }
}

export function invalidateStudentLevels() {
  return {
    type: types.INVALIDATE_STUDENT_LEVELS,
  }
}

export function requestStudentLevels() {
  return {
    type: types.REQUEST_STUDENT_LEVELS,
  }
}

export function receiveStudentLevels(student_level_index) {
  return {
    type: types.RECEIVE_STUDENT_LEVELS,
    student_level_index,
    receivedAt: Date.now()
  }
}
