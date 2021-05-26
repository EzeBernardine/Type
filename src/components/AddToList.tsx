import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value.trim() });
  };

  const handleCLick = () => {
    if (!input.name || !input.age || !input.url) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: +input.age,
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        value={input.name}
        name="name"
        placeholder='Name'
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        value={input.age}
        name="age"
        placeholder='Age'
        onChange={handleChange}
      />
      <input
        type="text"
        className="AddToList-input"
        value={input.url}
        name="url"
        placeholder='Image url'
        onChange={handleChange}
      />
      <textarea
        className="AddToList-input"
        value={input.note}
        placeholder='Note'
        onChange={handleChange}
        name="note"
      />

      <button className="AddToList-btn" onClick={handleCLick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
