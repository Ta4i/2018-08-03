import { CHANGE_OWN_COMMENT, CREATE_COMMENT } from '../action-types'
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
    default:
      return comments
  }
}
