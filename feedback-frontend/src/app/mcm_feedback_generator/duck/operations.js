import {generateMcmFeedback} from './actions.js'
let axios = require('axios');

export function generateMcmFeedbackOp(event) {
  return function (dispatch) {
    let goodFeedback = ""
    let improvementFeedback = ""
    const mcm_index = JSON.parse(event.target.dataset.index)
    console.log(mcm_index)
    for (let i = 0; i < mcm_index.length; i++) {
      console.log(mcm_index[i])
      console.log(document.getElementById(mcm_index[i].name).value)
      for (let j = 0; j < mcm_index[i].sentence_scores.length; j++) {
        let topicScoreButton = document.getElementById(mcm_index[i].name + mcm_index[i].sentence_scores[j].score)
        console.log(topicScoreButton.checked)
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
    dispatch(generateMcmFeedback(goodFeedback, improvementFeedback))
  }
}

export default generateMcmFeedbackOp;
