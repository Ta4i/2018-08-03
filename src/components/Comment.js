import * as React from "react";

export default class Comment extends React.PureComponent {
  render() {
    const { item, isOpen } = this.props;
    return (
      <li>
        <h4>{item.user}</h4>
        <button onClick={this.props.toggleVisibility}>
          {isOpen ? "close" : "open"}
        </button>
        {isOpen ? <p>{item.text}</p> : null}
      </li>
    );
  }
}
