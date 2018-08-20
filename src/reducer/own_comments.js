import {
  CHANGE_OWN_COMMENT,
  CREATE_COMMENT,
  DELETE_ARTICLE
} from '../action-types'
import { normalizedArticles } from '../fixtures'

const defaultUserComments = normalizedArticles.reduce(
  (obj, article) => ({
    ...obj,
    [article.id]: ''
  }),
  {}
)

console.log(defaultUserComments)

export default (comments = defaultUserComments, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_OWN_COMMENT:
      return { ...comments, [payload.articleId]: payload.comment }
    case CREATE_COMMENT:
      return { ...comments, [payload.articleId]: '' }
    case DELETE_ARTICLE:
      const newOwnComments = { ...comments }
      delete newOwnComments[action.payload.id]
      return newOwnComments
    default:
      return comments
  }
}
