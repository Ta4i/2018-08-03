import React, { Component } from "react";

function dropdown(WrappedComponent) {
  return class extends Component {
    state = {
      isOpen: false
    };

    handleClick = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isOpen={this.state.isOpen}
          clickHandler={this.handleClick}
        />
      );
    }
  };
}

export default dropdown;
