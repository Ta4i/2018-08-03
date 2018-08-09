import * as React from "react";

export class CloseBtn extends React.Component {
  render() {
    const { isOpen } = this.props;

    return (
      <button onClick={this.handleClick}>{isOpen ? "close" : "open"}</button>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.entity.id);
  };
}
