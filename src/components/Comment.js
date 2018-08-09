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
            {comment.comments.map(article => (
              <li key={article.id}> {article.text}</li>
            ))}
          </ul>
          })
        </li>
      </div>
    );
  }
}
