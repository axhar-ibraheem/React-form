import "./Form.css";
import React, { useState, useRef } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");

  // const userNameHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  // const userAgeHandler = (event) => {
  //   setUserAge(event.target.value);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollegeName = collegeInputRef.current.value;

    const data = {
      key: Math.random(),
      userName: enteredName,
      userAge: enteredAge,
      userCollegeName: enteredCollegeName,
    };

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }

    props.onAddUser(data);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
            // value={userName}
            type="text"
            id="username"
            className="form-input"
            // onChange={userNameHandler}
            ref={nameInputRef}
          />
        </div>
        <div className="form-row">
          <label htmlFor="username" className="form-label">
            age (years)
          </label>
          <input
            // value={userAge}
            type="number"
            id="username"
            className="form-input"
            // onChange={userAgeHandler}
            ref={ageInputRef}
          />
        </div>
        <div className="form-row">
          <label htmlFor="collegeName" className="form-label">
            college name
          </label>
          <input
            // value={userAge}
            type="text"
            id="collegeName"
            className="form-input"
            // onChange={userAgeHandler}
            ref={collegeInputRef}
          />
        </div>
        <Button type="submit">add user</Button>
      </form>
    </>
  );
};

export default Form;
