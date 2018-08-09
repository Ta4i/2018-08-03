import * as React from "react";

export class Comment extends React.PureComponent {
  render() {
    const { comment } = this.props;
    return (
      <li>
        {comment.user}
        <p>{comment.text}</p>
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.article.id, !this.props.isOpen);
  };
}
