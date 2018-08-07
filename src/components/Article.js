import React, { Fragment } from "react";
import CommentsList from "./CommentsList";

export class Article extends React.PureComponent {
  render() {
    const { article, isOpen } = this.props;

    const renderArticle = () => {
      if (isOpen) {
        return (
          <Fragment>
            <p>{article.text}</p>
            {article.comments ? <CommentsList {...article} /> : null}
          </Fragment>
        );
      }
    };

    return (
      <li>
        <h2>{article.title}</h2>
        <button onClick={this.handleClick}>{isOpen ? "Close" : "Open"}</button>
        {renderArticle()}
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.article.id);
  };
}
