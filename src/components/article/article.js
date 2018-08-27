import React, { PureComponent } from 'react'
import CommentList from '../comment-list/comment-list'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './article.css'
import PropTypes from 'prop-types'

class Article extends PureComponent {
  render() {
    const { article, isOpen, index } = this.props
    return (
      <div className={'article'}>
        <h2>{article.title}</h2>
        <button className={`open-article-${index}`} onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
        {/*{this.getBody()}*/}
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

Article.defaultProps = {
  article: {}
}

Article.propTypes = {
  article: PropTypes.object,
  isOpen: PropTypes.bool,
  index: PropTypes.number
}

export default Article
