import { createSelector } from 'reselect'

const articlesSelector = (state) => state.articles
const filtersSelector = (state) => state.filters
const commentsSelector = (state) => state.comments
const idSelector = (_, props) => props.id

export const filteredArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    console.log('selector filteredArticlesSelector')
    const {
      selected,
      dateRange: { from, to }
    } = filters

    const filtratedArticles = Object.keys(articles)
      .filter((id) => {
        const article = articles[id]
        const published = Date.parse(article.date)
        return (
          (!selected.length ||
            selected.find((selected) => selected.value === article.id)) &&
          (!from || !to || (published > from && published < to))
        )
      })
      .map((id) => articles[id])

    return {
      articles: filtratedArticles
    }
  }
)

export const createCommentSelector = () => {
  console.log('--- connect Comment 1')

  return createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('--- connect Comment 2')

    return {
      commentProp: comments[id]
    }
  })
}
