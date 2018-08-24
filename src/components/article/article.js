import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import { deleteArticle, loadArticleText } from '../../action-creators'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Loader from '../common/loader'
import './article.css'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    return (
      <div className={'article'}>
        <h2>{article.title}</h2>
        <button className={'open-article'} onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button className={'delete-article'} onClick={this.deleteArticle}>
          Delete
        </button>
        <ReactCSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <section>
        {article.text.loaded ? article.text.entities : <Loader />}
        <CommentList article={article} />
      </section>
    )
  }

  toggleOpen = () => {
    if (!this.props.isOpen) {
      console.log('fetch after opening')
      this.props.fetchData && this.props.fetchData(this.props.article.id)
    }
    this.props.toggleOpen(this.props.article.id)
  }

  deleteArticle = () => this.props.deleteArticle(this.props.article.id)
}

export default connect(
  null,
  (dispatch) => ({
    deleteArticle: (id) => dispatch(deleteArticle(id)),
    fetchData: (id) => dispatch(loadArticleText(id))
  })
)(Article)
