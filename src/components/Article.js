import * as React from "react";
import Moment from "react-moment";

export class Article extends React.PureComponent {
  render() {
    console.log("R");
    const { article, isOpen } = this.props;
    return (
      <li className="my-3">
        <header>
          {article.title} - <Moment format="DD.MM.YYYY">{article.date}</Moment>
          <button
            className="p-1 ml-3 d-inline-block"
            onClick={this.handleClick}
          >
            close
          </button>
        </header>

        {isOpen ? <p>{article.text}</p> : null}
      </li>
    );
  }

  handleClick = () => {
    if (this.props.isOpen) {
      this.props.toggleVisibility(null);
    } else {
      this.props.toggleVisibility(this.props.article.id);
    }
  };
}
