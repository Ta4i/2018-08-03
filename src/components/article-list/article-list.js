import React from 'react'
import { connect } from 'react-redux'
import Article from '../article'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import { DateUtils } from 'react-day-picker'

const ArticleList = (props) => {
  props.fetchData && props.fetchData()

  const articleElements = props.articles.articles
    .filter(article => 
      props.articles.dateFilter.from !== null && props.articles.dateFilter.to !== null ? DateUtils.isDayInRange(new Date(article.date), props.articles.dateFilter) : true)
    .filter(article => 
      !props.articles.selected.length || props.articles.selected.length && props.articles.selected.find(sel_article => article.id === sel_article.value))
    .map((article, index) => (
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

export default connect((state) => ({ articles: state.articles }))(
  accordion(ArticleList)
)
