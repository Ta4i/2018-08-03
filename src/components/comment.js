import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
  return (
    <div
      className="comment"
      data-automation-component="comment"
      data-automation-id={`comment-${comment.id}`}
    >
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.defaultProps = {
  comment: {
    id: '',
    user: '',
    text: ''
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
