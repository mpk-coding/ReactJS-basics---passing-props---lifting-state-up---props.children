import React from "react";
import UserListElement from "./UserListElement";

import "./UserList.css";

const UserList = (props) => {
  const userList = props.users;

  return (
    <ul className="user-list">
      {userList.map((element) => {
        return (
          <UserListElement
            key={element.id}
            name={element.name}
            age={element.age}
          ></UserListElement>
        );
      })}
    </ul>
  );
};

export default UserList;
