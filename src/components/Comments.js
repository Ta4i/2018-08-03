import React from "react";

export default props => {
  const { comments } = props;
  if (!comments || comments.length === 0) {
    return <div>No comments yet</div>;
  }
  return (
    <ul>
      {comments.map(comment => {
        const { id, user, text } = comment;
        return (
          <li key={id}>
            <p>{text}</p>
            <p>{user}</p>
          </li>
        );
      })}
    </ul>
  );
};
