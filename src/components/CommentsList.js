import React, { Component, Fragment } from "react";
import Comment from "./Comment";

class CommentsList extends Component {
  state = {
    isOpen: false
  };

  clickHandler = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  render() {
    const { isOpen } = this.state;
    const { comments } = this.props;

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
        <button onClick={this.clickHandler}>{isOpen ? "Close" : "Open"}</button>
        {renderComments()}
      </Fragment>
    );
  }
}

export default CommentsList;
