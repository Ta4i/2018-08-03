import React from 'react'

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

export default Comment
