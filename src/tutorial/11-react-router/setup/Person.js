import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("Hello gacho");
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((name) => name.id === parseInt(id));
    console.log(newPerson);
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link className="btn" to="/people">
        Back
      </Link>
    </div>
  );
};

export default Person;
