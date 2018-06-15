import types from './types.js'

export function createStudentLevelNew(student_level) {
  return {
    type: types.CREATE_STUDENT_LEVEL,
    student_level
  }
}

export function initStudentLevelNew(student_level) {
  return {
    type: types.NEW_STUDENT_LEVEL,
    student_level
  }
}