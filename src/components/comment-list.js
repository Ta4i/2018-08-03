import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import AnimateHeight from 'react-animate-height'
import './comment-list.css'

class CommentList extends Component {
  render() {
    const { isOpen, toggleOpen } = this.props
    const animationDuration = 320
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button data-automation-id="open-comments" onClick={toggleOpen}>
          {text}
        </button>
        <AnimateHeight
          duration={animationDuration}
          height={isOpen ? 'auto' : '0'}
        >
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={animationDuration}
            transitionLeaveTimeout={animationDuration}
          >
            {this.getBody()}
          </ReactCSSTransitionGroup>
        </AnimateHeight>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
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

export default toggleOpen(CommentList)
