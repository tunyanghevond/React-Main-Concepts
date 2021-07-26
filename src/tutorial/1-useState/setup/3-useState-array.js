import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [users, setUser] = React.useState(data);

  const remuveElement = (id) => {
    const newUser = users.filter((el) => el.id !== id);
    setUser(newUser);
  };

  return (
    <div>
      {users.map((user) => {
        const { name, id } = user;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => remuveElement(id)}>
              Delate
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => setUser([])}>
        Delate All
      </button>
    </div>
  );
};

export default UseStateArray;
