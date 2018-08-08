import * as React from "react";
import Comment from "./Comment";

export class Article extends React.PureComponent {
  state = {
    openCommentId: null
  };

  render() {
    const { article, isOpen } = this.props;

    const comments =
      article.comments &&
      article.comments.map(comment => (
        <Comment
          comment={comment}
          key={comment.id}
          isOpen={this.state.openCommentId === comment.id}
          toggleVisibility={this.toggleVisibility}
        />
      ));

    return (
      <li>
        <h3>{article.title}</h3>
        <button onClick={this.handleClick}>
          {isOpen ? "close article" : "open article"}
        </button>
        {isOpen ? <p>{article.text}</p> : null}
        {isOpen ? comments : null}
      </li>
    );
  }

  toggleVisibility = id => {
    this.setState({
      openCommentId: id === this.state.openCommentId ? null : id
    });
  };

  handleClick = () => {
    this.props.toggleVisibility(this.props.article.id);
  };
}
