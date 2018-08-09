import React from "react";
import Comments from "./Comments";

import "./Article.css";

export default class Article extends React.PureComponent {
  state = {
    isCommentsOpen: false
  };

  toggleComments = () => {
    const { isCommentsOpen } = this.state;
    this.setState({ isCommentsOpen: !isCommentsOpen });
  };

  getContentNode() {
    const { article } = this.props;
    const { isCommentsOpen } = this.state;
    const buttonTitle = isCommentsOpen ? "Hide comments" : "Show comments";

    return (
      <div>
        <p>{article.text}</p>
        {isCommentsOpen ? <Comments comments={article.comments} /> : null}
        <button className="toggle-btn" onClick={this.toggleComments}>
          {buttonTitle}
        </button>
      </div>
    );
  }

  render() {
    const { article, isOpen } = this.props;
    const buttonTitle = isOpen ? "Close" : "Open";
    return (
      <li>
        {article.title}
        <button className="toggle-btn" onClick={this.handleClick}>
          {buttonTitle}
        </button>
        {isOpen ? this.getContentNode() : null}
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.article.id);
  };
}
