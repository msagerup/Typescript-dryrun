import React, { useState } from "react";

import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface Istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "Magnus",
      age: 22,
      url: "www.vg.no",
      note: "likes to code",
    },
    {
      name: "Tore",
      age: 44,
      url: "www.dagbladet.no",
    },
  ]);

  people.map((person) => {
    return person.age;
  });

  return (
    <div className='App'>
      <h2>people</h2>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
