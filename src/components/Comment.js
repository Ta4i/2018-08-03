import * as React from "react";
import { OneComment } from "./OneComment";

export class Comment extends React.PureComponent {
  render() {
    const { comment } = this.props;

    return (
      <div>
        <li>
          {comment.title}
          <button>open/close</button>
          <ul>
            {comment.comments}
            .foreach(function(
            {params}) {<OneComment fd={params} />})
          </ul>
          })
        </li>
      </div>
    );
  }
}
