import * as React from "react";
import Comment from "./Comment";
import TogglerController from "./TogglerController";

// вся логика показа/скрытия перенесена в TogglerController, поэтому здесь можно обойтись function

const Article = props => (
  <li>
    <h3>{props.item.title}</h3>
    {props.isOpen ? (
      <React.Fragment>
        <button onClick={props.toggleVisibility}>
          {props.isOpen ? "close article" : "open article"}
        </button>
        <p>{props.item.text}</p>
        <ul>
          <TogglerController itemClass={Comment} items={props.item.comments} />
        </ul>
      </React.Fragment>
    ) : (
      <button onClick={props.toggleVisibility}>
        {props.isOpen ? "close article" : "open article"}
      </button>
    )}
  </li>
);

export default Article;
