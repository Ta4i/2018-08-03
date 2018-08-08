import * as React from "react";
import Comment from "./Comment";
import TogglerController from "./TogglerController";

export class Article extends React.PureComponent {
  state = {
    openCommentId: null
  };

  render() {
    const { item, isOpen } = this.props;

    return (
      <li>
        <h3>{item.title}</h3>
        <button onClick={this.props.toggleVisibility}>
          {isOpen ? "close article" : "open article"}
        </button>
        {isOpen ? <p>{item.text}</p> : null}
        {isOpen ? (
          <ul>
            <TogglerController itemClass={Comment} items={item.comments} />
          </ul>
        ) : null}
      </li>
    );
  }
}
