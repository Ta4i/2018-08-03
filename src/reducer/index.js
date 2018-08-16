import { combineReducers } from 'redux'
import countReducer from './count'
import articles from './articles'
import date from './date'
import select from './select'

export default combineReducers({
  count: countReducer,
  articles,
  date,
  select
})
