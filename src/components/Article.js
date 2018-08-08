import * as React from "react";
import Comment from "./Comment";
import TogglerController from "./TogglerController";

export class Article extends React.PureComponent {
  state = {
    openCommentId: null
  };

  render() {
    const { item, isOpen } = this.props;

    const comments =
      item.comments &&
      item.comments.map(comment => (
        <Comment
          comment={comment}
          key={comment.id}
          isOpen={this.state.openCommentId === comment.id}
          toggleVisibility={this.toggleVisibility}
        />
      ));

    return (
      <li>
        <h3>{item.title}</h3>
        <button onClick={this.handleClick}>
          {isOpen ? "close article" : "open article"}
        </button>
        {isOpen ? <p>{item.text}</p> : null}
        {isOpen ? (
          <ul>
            <TogglerController
              itemClass={Comment}
              items={item.comments}
              toggleVisibility={this.toggleVisibility}
            />
          </ul>
        ) : null}
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.item.id);
  };
}
