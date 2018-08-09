import * as React from "react";
import { CloseBtn } from "./CloseBtn";

export class Comment extends React.PureComponent {
  render() {
    //console.log("RC");
    const { comment, isOpen } = this.props;

    return (
      <li>
        {comment.user}

        <CloseBtn
          entity={comment}
          isOpen={isOpen}
          toggleVisibility={this.props.toggleVisibility}
        />

        {isOpen ? <p>{comment.text}</p> : null}
      </li>
    );
  }

  /*handleClick = () => {
        this.props.toggleVisibility(this.props.comment.id);
    };*/
}
