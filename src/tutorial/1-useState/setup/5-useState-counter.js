import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => setCounter(counter - 1)}>
        decrease
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        increase
      </button>
    </div>
  );
};

export default UseStateCounter;
