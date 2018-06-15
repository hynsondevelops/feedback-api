import types from './types.js'

//MCM Topic
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

export function updateMcmTopicName(mcm_topic_edit) {
  return {
    type: types.UPDATE_MCM_TOPIC_NAME,
    mcm_topic_edit
  }
}

//Student Level
export function addRandomSentence(student_level) {
  return {
    type: types.ADD_RANDOM_SENTENCE,
    student_level
  }
}


export function removeRandomSentence(student_level) {
  return {
    type: types.REMOVE_RANDOM_SENTENCE,
    student_level
  }
}

export function updateRandomSentence(student_level) {
  return {
    type: types.UPDATE_RANDOM_SENTENCE,
    student_level
  }
}

export function updateStudentLevelName(student_level) {
  return {
    type: types.UPDATE_STUDENT_LEVEL_NAME,
    student_level
  }
}

export function updateStudentLevelText(student_level) {
  return {
    type: types.UPDATE_STUDENT_LEVEL_TEXT,
    student_level
  }
}