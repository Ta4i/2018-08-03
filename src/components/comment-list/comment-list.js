import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
    const { comments, isOpen } = this.props
    if (!isOpen) return null

    const body = comments.length ? (
      <ul className={'cl-ul'}>
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
