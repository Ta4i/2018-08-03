import { combineReducers } from 'redux'
import countReducer from './count'
import articles from './articles'
import filters from './filters'
import comments from './comments'
import username from './username'
import ownComments from './own_comments'

export default combineReducers({
  count: countReducer,
  articles,
  filters,
  comments,
  username,
  ownComments
})
