import * as React from "react";

// обертка передает пропсы и больше ничего не делает.
// писал посмотреть декораторы

export default function decorator(ArgClass) {
  return class decoratedClass extends React.PureComponent {
    render() {
      return <ArgClass {...this.props} />;
    }
  };
}
