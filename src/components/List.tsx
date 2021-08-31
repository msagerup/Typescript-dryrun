import React from "react";

import { Istate as Iprops } from "../App";

const List: React.FC<Iprops> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li>
        <h2>{person.name}</h2>
        <h2>{person.age}</h2>
        <p>{person.note}</p>
      </li>
    ));
  };

  return <div>{renderList()}</div>;
};

export default List;
