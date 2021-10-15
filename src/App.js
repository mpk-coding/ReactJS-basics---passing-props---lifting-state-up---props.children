import React, {useState} from "react";
import "./App.css";

import Card from "./components/Card/Card.js";
import AddUser from "./components/AddUser/AddUser.js";
import UserList from "./components/UserList/UserList.js";

let initList = [
  {id: "1", name: "snowman", age: 1},
  {id: "2", name: "santa", age: 100},
  {id: 3, name: "test", age: 0},
];

function App() {
  const [userList, setUserList] = useState(initList);

  const onLiftStateUp = (data) => {
    setUserList((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div className="App">
      <Card className="test">
        <AddUser liftStateUp={onLiftStateUp}></AddUser>
      </Card>
      <Card>
        <UserList users={userList}></UserList>
      </Card>
    </div>
  );
}

export default App;
