import { DELETE_ARTICLE, CREATE_COMMENT } from '../action-types'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (res, article) => ({
    ...res,
    [article.id]: article
  }),
  {}
)

export default (articles = defaultArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      const newArticles = { ...articles }
      delete newArticles[action.payload.id]
      return newArticles
    case CREATE_COMMENT:
      const id = action.payload.articleId
      const newArticle = {
        ...articles[id],
        comments: [...articles[id].comments, action.id]
      }
      const articlesWithComment = { ...articles, [id]: newArticle }
      // newArticle.comments = [ ...newArticle.comments, action.id ]
      return articlesWithComment
    default:
      return articles
  }
}
