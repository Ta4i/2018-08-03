import * as React from "react";
import { CommentList } from "./CommentList";

export class Article extends React.PureComponent {
  render() {
    const { article, isOpen } = this.props;
    return (
      <li>
        {article.title}
        <button onClick={this.handleClick}>{isOpen ? "close" : "open"}</button>
        {isOpen ? (
          <div>
            <p>{article.text}</p>
            <CommentList comments={article.comments} />
          </div>
        ) : null}
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.article.id);
  };
}
