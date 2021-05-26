import React, { useState } from "react";
import "./App.css";
import List from "./components/list";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Emeka Okun",
      age: 36,
      url: "",
      note: "lorem ipsum",
    },
  ]);
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
