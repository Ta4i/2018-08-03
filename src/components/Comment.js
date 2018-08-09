import * as React from "react";

export class Article extends React.PureComponent {
  render() {
    console.log(this.props);
    const { article, isOpen } = this.props;
    return (
      <li>
        {article.title}
        <button onClick={this.handleClick}>close</button>
        {isOpen ? <p>{article.text}</p> : null}
        {isOpen ? <button onClick={this.handleClick}>close</button> : null}
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.article.id, !this.props.isOpen);
  };
}
