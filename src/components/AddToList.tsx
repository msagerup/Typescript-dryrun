import React from "react";
import { useState } from "react";

import { Istate as Props } from "../App";

interface Iprops {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<Iprops> = ({ people, setPeople }) => {
  const [input, setInput] = useState({ name: "", age: 0, url: "", note: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: input.age,
        url: input.url,
        note: input.note,
      },
    ]);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        value={input.name}
        onChange={handleChange}
        name='name'
      ></input>
      <input
        type='number'
        placeholder='age'
        value={input.age}
        onChange={handleChange}
        name='age'
      ></input>
      <input
        type='text'
        placeholder='url'
        value={input.url}
        onChange={handleChange}
        name='url'
      ></input>
      <textarea
        placeholder='note'
        value={input.note}
        name='note'
        onChange={handleChange}
      ></textarea>

      <button onClick={handleClick}>Add to list</button>
    </div>
  );
};

export default AddToList;
