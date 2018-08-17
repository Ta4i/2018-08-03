import { FILTER_ARTICLES } from '../action-types'
import articlesMock from '../fixtures'

export default (state = { articles: articlesMock, filters: {} }, action) => {
  switch (action.type) {
    case FILTER_ARTICLES:
      return state.filter((article) => articleFilter(article, state.filters))
    default:
      return state
  }
}

const articleFilter = (article, filter) => {
  if (article.date < filter.date.from || article.date > filter.date.to) {
    return false
  }
  if (!filter.select.includes(article.title)) {
    return false
  }
  return true
}
