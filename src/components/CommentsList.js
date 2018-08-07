import React, { Fragment } from "react";
import dropdown from "../HOC/dropdown";
import Comment from "./Comment";

const CommentsList = ({ comments, clickHandler, isOpen }) => {
  const renderComments = () => {
    if (isOpen) {
      return (
        <ul>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      );
    }
  };

  return (
    <Fragment>
      <h3>Comments list</h3>
      <button onClick={clickHandler}>{isOpen ? "Close" : "Open"}</button>
      {renderComments()}
    </Fragment>
  );
};

const wrappedCommentsList = dropdown(CommentsList);

export default wrappedCommentsList;
