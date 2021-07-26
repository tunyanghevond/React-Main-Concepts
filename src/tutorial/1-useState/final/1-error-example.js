import { useState } from "react";
import React from "react";

const ErrorExample = () => {
  let [title, setTitle] = useState("random title1");

  const handleClick = () => {
    if (title === "random title1") {
      setTitle((title = "hello people"));
    } else {
      setTitle((title = "random title1"));
    }

    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
