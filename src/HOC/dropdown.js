import React, { Component, Fragment } from "react";

export default function dropdown() {
  return function(ChildComponent) {
    return class extends Component {
      state = {
        isOpen: false
      };

      clickHandler = () =>
        this.setState({
          isOpen: !this.state.isOpen
        });

      render() {
        return (
          <Fragment>
            <ChildComponent clickHandler={this.clickHandler} />
          </Fragment>
        );
      }
    };
  };
}
