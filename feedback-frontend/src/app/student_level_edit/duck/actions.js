import types from './types.js'



export function invalidateStudentLevel() {
  return {
    type: types.INVALIDATE_STUDENT_LEVEL,
  }
}

export function requestStudentLevel(student_level) {
  return {
    type: types.REQUEST_STUDENT_LEVEL,
    student_level
  }
}

export function receiveStudentLevel(student_level) {
  return {
    type: types.RECEIVE_STUDENT_LEVEL,
    student_level,
    receivedAt: Date.now()
  }
}

export function updateStudentLevel(student_level) {
  return {
    type: types.UPDATE_STUDENT_LEVEL,
    student_level
  }
}