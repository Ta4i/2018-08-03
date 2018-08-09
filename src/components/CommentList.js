import * as React from "react";
import { Comment } from "./Comment";

export class CommentList extends React.Component {
  render() {
    return (
      <div className="my-3">
        <h5>Комментарии:</h5>
        <div>
          {this.props.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
        <button
          className="p-1 ml-3 d-inline-block"
          onClick={this.props.toggleCommentsDisplay}
        >
          {this.props.isCommentsDisplay ? "Скрыть" : "Показать"} комментарии
        </button>
      </div>
    );
  }
}
