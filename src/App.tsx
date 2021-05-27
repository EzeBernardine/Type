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
  confirmed: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [{ people, confirmed }, setState] = useState<IState>({
    confirmed: [],
    people: [
      {
        name: "Emeka Okun",
        age: 36,
        url: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
        note: "I love to party",
      },
    ],
  });
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <div className="info">
        <p>
          Total number of people shortlisted:{" "}
          <button className="info-btn">
            {people.length + confirmed.length}
          </button>
        </p>
        <p>
          Total number of people confrimed:{" "}
          <button className="info-btn">{confirmed.length}</button>
        </p>
      </div>
      <List people={people} setState={setState} confirmed={confirmed} />
      <AddToList people={people} setState={setState} />
    </div>
  );
}

export default App;
