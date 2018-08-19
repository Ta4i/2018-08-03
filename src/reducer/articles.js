import { DELETE_ARTICLE } from '../action-types'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (res, article) => ({
    ...res,
    [article.id]: article
  }),
  {}
)

export default (state = defaultArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      const newState = { ...state }
      delete newState[action.payload.id]
      return newState
    default:
      return state
  }
}
