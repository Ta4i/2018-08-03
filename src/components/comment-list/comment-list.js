import React, { Component } from 'react'
import Comment from './../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import AnimateHeight from 'react-animate-height'
import animationParameters from './../../animation-parameters'
import './comment-list.css'

class CommentList extends Component {
  static animationDuration = animationParameters.time.m

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button
          className={`open-comments`}
          data-automation-id="open-comments"
          onClick={toggleOpen}
        >
          {text}
        </button>
        <AnimateHeight
          duration={CommentList.animationDuration}
          height={isOpen ? 'auto' : '0'}
        >
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={CommentList.animationDuration}
            transitionLeaveTimeout={CommentList.animationDuration}
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
