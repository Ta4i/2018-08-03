import { combineReducers } from 'redux'
import countReducer from './count'
import articles from './articles'
import select from './select'
import filtered_articles from './filtered_articles'
import filters from './filters'

export default combineReducers({
  count: countReducer,
  articles,
  select,
  filtered_articles,
  filters
})
