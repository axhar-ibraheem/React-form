import "./App.css";
import Form from "./Component/Form.js";
import React, { useState } from "react";
import FormSubmit from "./Component/FormSubmit.js";
function App() {
  const userDetails = [
    {
      key: Math.random(),
      userName: "john",
      age: 23,
    },
  ];
  const [userList, setUsers] = useState(userDetails);

  const addUserHandler = (user) => {
    setUsers([user, ...userList]);
  };

  return (
    <div>
      <Form onAddUser={addUserHandler} />
      <FormSubmit item={userList} />
    </div>
  );
}

export default App;
