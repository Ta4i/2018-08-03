import * as React from "react";
import TogglerItem from "./TogglerItem";

// вся логика включения / выключения в этом классе
// TogglerController принимает на вход массив объектов и класс что строить на выходе
// на выходе получаем массив оберток TogglerItem которые передают колбэк

export default class TogglerController extends React.PureComponent {
  state = {
    openItemId: null
  };

  render() {
    const { items = [], itemClass } = this.props;
    return items.map(item => (
      <TogglerItem
        itemClass={itemClass}
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
