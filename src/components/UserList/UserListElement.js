import React from "react";

import "./UserListElement.css";

const UserListElement = (props) => {
  let sentence = `${props.name} is ${props.age} years of age`;
  if (props.age == 1) {
    sentence = `${props.name} is ${props.age} year of age`;
  }

  return <li>{sentence}</li>;
};

export default UserListElement;
