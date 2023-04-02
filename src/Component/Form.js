import "./Form.css";
import React, { useState } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      key: Math.random(),
      userName: userName,
      age: userAge,
    };
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }
    props.onAddUser(data);
    setUserName("");
    setUserAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <form onSubmit={formSubmitHandler} className="form-control">
        <div className="form-row">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            value={userName}
            type="text"
            id="username"
            className="form-input"
            onChange={userNameHandler}
          />
        </div>
        <div className="form-row">
          <label htmlFor="username" className="form-label">
            age (years)
          </label>
          <input
            value={userAge}
            type="number"
            id="username"
            className="form-input"
            onChange={userAgeHandler}
          />
        </div>
        <Button type="submit">add user</Button>
      </form>
    </div>
  );
};

export default Form;
