import React from 'react'
import { connect } from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'

const filterArticles = (articles, selected = []) => {
  if (selected.length === 0) {
    return articles
  }

  const selectedIds = selected.map((item) => item.value)

  return articles.filter((article) => selectedIds.includes(article.id))
}

const ArticleList = (props) => {
  props.fetchData && props.fetchData()

  const filteredArticles = filterArticles(props.articles, props.selected)

  const articleElements = filteredArticles.map((article, index) => (
    <li key={article.id} className={'article-container'}>
      <Article
        article={article}
        isOpen={article.id === props.openItemId}
        toggleOpen={props.toggleOpenItem}
        index={index}
      />
    </li>
  ))

  return <ul>{articleElements}</ul>
}

ArticleList.propTypes = {
  fetchData: PropTypes.func
}

export default connect((state) => ({
  articles: state.articles,
  selected: state.selected
}))(accordion(ArticleList))
