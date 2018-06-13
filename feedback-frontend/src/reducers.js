import { combineReducers } from 'redux';
import homeReducer from './app/home/duck/reducers'
import mcmFeedbackGeneratorReducer from './app/mcmFeedbackGeneratorReducer/duck/reducers'

const rootReducer = combineReducers({
  home: homeReducer,
  mcmFeedbackGenerator: mcmFeedbackGeneratorReducer
});

export default rootReducer;