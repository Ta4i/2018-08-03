import * as React from "react";

export class Article extends React.PureComponent {
  state = {
    isCommentOpen: false
  };

  render() {
    console.log(this.props);
    const { article, isOpen } = this.props;
    return (
      <li>
        {article.title}
        <button onClick={this.handleClick}>close</button>
        {isOpen ? <p>{article.text}</p> : null}
        {isOpen ? <p>{article.comments.map(function() {})}</p> : null}
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.article.id, !this.props.isOpen);
  };

  showComments = () => {
    this.setState({
      isCommentOpen: !this.state.isCommentOpen
    });
  };
}
