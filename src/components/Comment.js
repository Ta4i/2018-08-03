import React from "react";

const Comment = ({ comment }) => (
  <li>
    <h4>{comment.user}</h4>
    <p>{comment.text}</p>
  </li>
);

export default Comment;
