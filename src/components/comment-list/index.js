import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './comment-list.css'

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
          transitionName="comments"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {this.getBody()}
        </ReactCSSTransitionGroup>
        
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul data-automation-id="comments-list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3 data-automation-id="no-comments">No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

CommentList.defaultProps = {
  comments: [],
  isOpen: false
}

CommentList.propTypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired
}

export default toggleOpen(CommentList)
