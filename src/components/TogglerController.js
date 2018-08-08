import * as React from "react";

export default class TogglerController extends React.PureComponent {
  state = {
    openItemId: null
  };

  render() {
    const items = this.props.items || [];
    return items.map(item => (
      <this.props.itemClass
        item={item}
        key={item.id}
        isOpen={item.id === this.state.openItemId}
        toggleVisibility={this.toggleVisibility}
      />
    ));
  }

  toggleVisibility = id => {
    this.setState({
      openItemId: this.state.openItemId === id ? null : id
    });
  };
}
