import * as React from "react";

export class Comment extends React.Component {
  render() {
    return (
      <div className="my-3">
        <div>
          <i>{this.props.comment.user}</i>
        </div>
        <div>{this.props.comment.text}</div>
      </div>
    );
  }
}
