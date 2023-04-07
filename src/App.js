import "./App.css";
import Form from "./Component/Form.js";
import React, { useState } from "react";
import FormSubmit from "./Component/FormSubmit.js";
function App() {
  const userDetails = [
    {
      key: Math.random(),
      userName: "john",
      userAge: 23,
      userCollegeName: "Trinity college",
    },
  ];
  const [userList, setUsers] = useState(userDetails);

  const addUserHandler = (user) => {
    setUsers([user, ...userList]);
  };

  return (
    <>
      <Form onAddUser={addUserHandler} />
      <FormSubmit item={userList} />
    </>
  );
}

export default App;
