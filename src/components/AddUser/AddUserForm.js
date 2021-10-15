import React, {useState} from "react";
import Button from "../Button/Button.js";

import "./AddUserForm.css";

const defaultAge = 18;
const defaultState = {id: Number(), name: "", age: defaultAge};

const AddUserForm = (props) => {
  const [formData, setFormData] = useState(defaultState);
  //
  const submitHandler = (event) => {
    event.preventDefault();
    //
    props.onSubmit(formData);
    //
    resetInputs(event);
    //
  };

  const resetInputs = (event) => {
    for (const element of event.target) {
      switch (element.getAttribute("data-key")) {
        case "name":
          element.value = defaultState.name;
          break;
        case "age":
          element.value = defaultState.age;
          break;
        default:
          break;
      }
    }
    //
    setFormData(defaultState);
    //
  };

  const changeHandler = (event) => {
    setFormData((prevState) => {
      switch (event.target.getAttribute("data-key")) {
        case "name":
          return {
            ...prevState,
            name: event.target.value,
            id: Math.floor(Math.random() * 100000),
          };
        case "age":
          return {
            ...prevState,
            age: event.target.value,
            id: Math.floor(Math.random() * 100000),
          };
        default:
          break;
      }
      //
    });
    //
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-user-form__control">
        <label htmlFor="">Name</label>
        <input data-key="name" type="text" onChange={changeHandler} />
      </div>
      <div className="add-user-form__control">
        <label htmlFor="">Age in full years</label>
        <input
          data-key="age"
          defaultValue={defaultAge}
          type="number"
          increment="1"
          onChange={changeHandler}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default AddUserForm;
