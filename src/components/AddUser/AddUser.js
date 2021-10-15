import React from "react";
import AddUserForm from "./AddUserForm.js";
import "./AddUser.css";

const AddUser = (props) => {
  const addSubmitHandler = (data) => {
    props.liftStateUp(data);
  };

  return (
    <div className="add-user">
      <AddUserForm onSubmit={addSubmitHandler}></AddUserForm>
    </div>
  );
};

export default AddUser;
