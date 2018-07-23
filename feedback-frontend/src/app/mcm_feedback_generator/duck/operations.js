import {generateMcmFeedback} from './actions.js'
let axios = require('axios');

export function generateMcmFeedbackOp(event) {
  return function (dispatch) {
    let intro = document.getElementById("intro").value
    let conclusion = document.getElementById("conclusion").value
    let goodFeedback = intro + "\n"
    let improvementFeedback = ""
    const mcm_index = JSON.parse(event.target.dataset.index)
    for (let i = 0; i < mcm_index.length; i++) {
      for (let j = 0; j < mcm_index[i].sentence_scores.length; j++) {
        let topicScoreButton = document.getElementById(mcm_index[i].name + mcm_index[i].sentence_scores[j].score)
        if (topicScoreButton.checked) {
          if (mcm_index[i].sentence_scores[j].quality) { //good quality
            goodFeedback += "\n" + topicScoreButton.name + ": " + topicScoreButton.value
          }
          else { //needs improvement
            improvementFeedback += "\n" + topicScoreButton.name + ": " + topicScoreButton.value
          }
        }
      }
    }
    improvementFeedback += ("\n\n" + conclusion)
    dispatch(generateMcmFeedback(goodFeedback, improvementFeedback))
  }
}

export default generateMcmFeedbackOp;
