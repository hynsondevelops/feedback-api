import {generateMcmFeedback} from './actions.js'
let axios = require('axios');

export function generateMcmFeedbackOp(event) {
  return function (dispatch) {
    let feedback = ""
    const mcm_index = JSON.parse(event.target.dataset.index)
    console.log(mcm_index)
    for (let i = 0; i < mcm_index.length; i++) {
      console.log(mcm_index[i])
      console.log(document.getElementById(mcm_index[i].name).value)
      for (let j = 0; j < mcm_index[i].sentence_scores.length; j++) {
        let topicScoreButton = document.getElementById(mcm_index[i].name + mcm_index[i].sentence_scores[j].score)
        console.log(topicScoreButton.checked)
        if (topicScoreButton.checked) {
          feedback += "\n" + topicScoreButton.name + ": " + topicScoreButton.value
        }
      }
    }
    console.log(feedback)

    dispatch(generateMcmFeedback(feedback))
  }
}

export default generateMcmFeedbackOp;
