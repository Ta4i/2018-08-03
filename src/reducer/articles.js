import { DELETE_ARTICLE, SET_DATES, SET_SELECTED } from '../action-types'
import articlesMock from '../fixtures'

export default (state = {articles: articlesMock, dateFilter: {from: null, to: null}, selected: []}, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return {
        articles: state.articles.filter((article) => article.id !== action.payload.id), 
        dateFilter: state.dateFilter, 
        selected: state.selected}
    case SET_DATES:
      return {
        articles: state.articles, 
        dateFilter: action.dates, 
        selected: state.selected}
    case SET_SELECTED:
        return {
          articles: state.articles, 
          dateFilter: state.dateFilter, 
          selected: action.selected}
    default:
      return state
  }
}
