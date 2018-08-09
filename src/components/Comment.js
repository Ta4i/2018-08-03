import * as React from "react";

// вся логика показа/скрытия перенесена в TogglerController, поэтому здесь можно обойтись function

export default function Comment(props) {
  return (
    <li>
      <h4>{props.item.user}</h4>
      <button onClick={props.toggleVisibility}>
        {props.isOpen ? "close" : "open"}
      </button>
      {props.isOpen ? <p>{props.item.text}</p> : null}
    </li>
  );
}
