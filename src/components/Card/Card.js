import React from "react";

import "./Card.css";

const Card = (props) => {
  let classes = `card input`;
  if (props.className) {
    classes = `${classes} ${props.className}`;
  }

  return <div className={classes}>{props.children}</div>;
};

export default Card;
