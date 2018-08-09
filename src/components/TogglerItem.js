import * as React from "react";

// вспомогательная обертка для работы TogglerController

export default class TogglerItem extends React.PureComponent {
  render() {
    return (
      <this.props.itemClass
        item={this.props.item}
        isOpen={this.props.isOpen}
        toggleVisibility={this.handleClick}
      />
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.item.id);
  };
}
