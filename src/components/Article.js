import * as React from "react";
import Comment from "./Comment";
import TogglerController from "./TogglerController";

// вся логика показа/скрытия перенесена в TogglerController, поэтому здесь можно обойтись function

export function Article(props) {
  return (
    <li>
      <h3>{props.item.title}</h3>
      <button onClick={props.toggleVisibility}>
        {props.isOpen ? "close article" : "open article"}
      </button>
      {props.isOpen ? <p>{props.item.text}</p> : null}
      {props.isOpen ? (
        <ul>
          <TogglerController itemClass={Comment} items={props.item.comments} />
        </ul>
      ) : null}
    </li>
  );
}
