import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Comment from './comment'
import toggleOpen from '../../decorators/toggleOpen'
import './comment-list.css'
import { connect } from 'react-redux'
import { createComment, changeOwnComment } from '../../action-creators'

class CommentList extends Component {
  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button data-automation-id="open-comments" onClick={toggleOpen}>
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

  addComment = () => {
    this.props.createComment(this.props.articleId)
  }

  handleCommentInput = (event) => {
    this.props.changeOwnComment(event.target.value, this.props.articleId)
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

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
        <input value={this.props.comment} onChange={this.handleCommentInput} />
        <button onClick={this.addComment}>add comment</button>
      </div>
    )
  }
}

CommentList.defaultProps = {
  comments: []
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default connect(
  (state, ownProps) => ({
    comment: state.ownComments[ownProps.articleId] || ''
  }),
  (dispatch) => ({
    createComment: (articleId) => dispatch(createComment(articleId)),
    changeOwnComment: (comment, articleId) =>
      dispatch(changeOwnComment(comment, articleId))
  })
)(toggleOpen(CommentList))
