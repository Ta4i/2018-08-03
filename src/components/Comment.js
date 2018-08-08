import * as React from "react";

export class Comment extends React.Component {
  state = {
    isVisible: false
  };

  render() {
    const { comment } = this.props;
    return (
      <li>
        {comment.user}
        <button onClick={this.handleClick}>
          {this.state.isVisible ? "close" : "show"}
        </button>
        {this.state.isVisible ? <p>{comment.text}</p> : null}
      </li>
    );
  }

  handleClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };
}
