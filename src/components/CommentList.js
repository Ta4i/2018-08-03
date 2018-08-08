import * as React from "react";
import { Comment } from "./Comment";

export class CommentList extends React.Component {
  render() {
    let { comments } = this.props;
    if (!comments) comments = [];
    return (
      <ul>
        {comments.length > 0
          ? comments.map(comment => <Comment comment={comment} />)
          : "No comments"}
        <br />
      </ul>
    );
  }
}
