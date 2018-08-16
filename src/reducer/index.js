import { combineReducers } from 'redux'
import countReducer from './count'
import articles from './articles'
import selected from './selected'

export default combineReducers({
  count: countReducer,
  articles,
  selected
})
