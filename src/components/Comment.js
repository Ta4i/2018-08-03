import * as React from "react";

export default class Comment extends React.PureComponent {
  render() {
    const { comment, isOpen } = this.props;
    return (
      <div>
        <h4>{comment.user}</h4>
        <button onClick={this.handleClick}>{isOpen ? "close" : "open"}</button>
        {isOpen ? <p>{comment.text}</p> : null}
      </div>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.comment.id);
  };
}
