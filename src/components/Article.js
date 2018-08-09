import * as React from "react";
import { CommentList } from "./CommentList";
import { CloseBtn } from "./CloseBtn";

export class Article extends React.PureComponent {
  render() {
    //console.log("R");
    const { article, isOpen } = this.props;

    return (
      <li>
        {article.title}

        <CloseBtn
          entity={article}
          isOpen={isOpen}
          toggleVisibility={this.props.toggleVisibility}
        />

        {isOpen ? (
          <div>
            <p>{article.text}</p>
            {article.comments ? (
              <CommentList comments={article.comments} />
            ) : (
              <p>No comments.</p>
            )}
          </div>
        ) : null}
      </li>
    );
  }

  /*handleClick = () => {
    this.props.toggleVisibility(this.props.article.id);
  };*/
}
