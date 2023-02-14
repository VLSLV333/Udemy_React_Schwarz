import React, { useState } from "react";
import style from "./App.module.css";
import Modal from "./Components/Modal/Modal";
import Card from "./Components/UI/Card";
import UserForm from "./Components/Users/UserForm";
import UsersList from "./Components/Users/UsersList";

// A Wrapper component created by our hand in order to avoid 'div' Soup. (Unnesessary created wrapping divs)
// import Wrapper from "./Components/Helpers/Wrapper";

function App() {
  const [validInput, setValidInput] = useState(true);

  const removeModalHandler = () => setValidInput(true);

  const usersList = [];

  const [users, setUsers] = useState(usersList);

  const addUser = (user) => {
    setUsers((prevState) => {
      let allUsers = [...prevState];
      allUsers.unshift(user);
      return allUsers;
    });
  };

  const [invalidMessage, setInvalidMessage] = useState("");

  const modalMessage = (message) => {
    if (message === "empty") {
      setValidInput(false)
      setInvalidMessage(
        "Please enter a valid name and age (non-empty values)."
      );
    } else if (message ==='low age'){
      setValidInput(false)
      setInvalidMessage(
        "Please enter a valid age (>0)."
      );
    }
  };

  let zeroUsers = users.length > 0;

  return (
    // <Wrapper>
   // Built in React Wrapper that is created just to avoid using useless div or any wrappers.  
    <React.Fragment>
      {!validInput && (
        <div
          className={style["black-screen"]}
          onClick={removeModalHandler}
        ></div>
      )}
      {!validInput && <Modal removeModal={removeModalHandler} invalid={invalidMessage}></Modal>}
      <UserForm addHandler={addUser} invalidHandler={modalMessage}></UserForm>
      {zeroUsers && (
        <Card>
          {users.map((user) => (
            <UsersList name={user.name} age={user.age} key={user.id} />
          ))}
        </Card>
      )}
    </React.Fragment>
    // </Wrapper>
  );
}

export default App;