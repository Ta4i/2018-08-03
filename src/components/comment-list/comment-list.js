import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Comment from './comment'
import CommentForm from '../comment-form'
import toggleOpen from '../../decorators/toggleOpen'
import { loadComments } from '../../action-creators'
import './comment-list.css'

class CommentList extends Component {
  render() {
    const { isOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button data-automation-id="open-comments" onClick={this.handleClick}>
          {text}
        </button>
        <ReactCSSTransitionGroup
          transitionName="comment-list"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  handleClick = () => {
    if (!this.props.isLoaded) {
      const { articleId, comments, fetchData } = this.props
      fetchData(articleId, comments)
    }
    this.props.toggleOpen()
  }

  getBody() {
    const { comments = [], articleId, isOpen } = this.props

    if (!isOpen) return null
    console.log('comments', comments)
    const body = comments.length ? (
      <ul>
        {comments.map((id) => (
          <li className={'comment-container'} key={id}>
            <Comment id={id} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return (
      <div>
        {body}
        <CommentForm articleId={articleId} />
      </div>
    )
  }
}

CommentList.defaultProps = {
  article: {}
}

CommentList.propTypes = {
  articleId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default connect(
  (state, ownProps) => {
    return {
      isLoaded: state.articles.entities.get(ownProps.articleId)
        .commentsLoadingStatus.loaded
    }
  },
  (dispatch) => ({
    fetchData: (articleId, comments) =>
      dispatch(loadComments(articleId, comments))
  })
)(toggleOpen(CommentList))
