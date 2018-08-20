import { createSelector } from 'reselect'

const filtersSelector = (state) => state.filters
const commentsSelector = (state) => state.comments
const idSelector = (_, props) => props.id
export const articlesMapSelector = (state) => state.articles
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => Object.values(articlesMap)
)
export const filtersSelectionSelector = createSelector(
  filtersSelector,
  (filters) => filters.selected
)

export const filteredArticlesSelector = createSelector(
  articleListSelector,
  filtersSelector,
  (articles, filters) => {
    console.log('selector filteredArticlesSelector')
    const {
      selected,
      dateRange: { from, to }
    } = filters

    const filtratedArticles = articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })

    return {
      articles: filtratedArticles
    }
  }
)

export const createCommentSelector = () => {
  console.log('--- connect Comment')

  return createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('--- connect Comment')

    return {
      commentProp: comments[id]
    }
  })
}
