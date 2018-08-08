import * as React from "react";

// обертка передает пропсы и бо льше ничего не делает.
// писал просто посмотреть декораторы

export default function decorator(ArgClass) {
  return class decoratedClass extends React.PureComponent {
    render() {
      return <ArgClass {...this.props} />;
    }
  };
}
