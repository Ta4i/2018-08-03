import * as React from "react";
import { Comment } from "./Comment";

export class CommentList extends React.Component {
  state = {
    openCommentId: null
  };

  render() {
    const { comments } = this.props;
    return (
      <ul>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            isOpen={this.state.openCommentId === comment.id}
            toggleVisibility={this.toggleVisibility}
          />
        ))}
      </ul>
    );
  }

  toggleVisibility = id => {
    this.setState({
      openCommentId: this.state.openCommentId === id ? null : id
    });
  };
}
