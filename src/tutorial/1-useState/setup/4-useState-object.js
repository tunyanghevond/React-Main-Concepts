import React, { useState } from "react";

const UseStateObject = () => {
  const [user, setUser] = useState({
    name: "Alex",
    age: 25,
    message: "random message",
  });

  const changeMessage = () => {
    setUser({ ...user, message: "Hello World" });
  };
  return (
    <>
      <h1>{user.name}</h1>
      <h2> {user.age}</h2>
      <h3>{user.message}</h3>
      <button type="button" onClick={changeMessage}>
        Change Message
      </button>
      {console.log(user)}
    </>
  );
};

export default UseStateObject;
