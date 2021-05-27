import React from "react";
import "../App.css";
import { IState as IProps } from "../App";
interface Props {
  people: IProps["people"];
  confirmed: IProps["confirmed"];
  setState: React.Dispatch<React.SetStateAction<IProps>>;
}

const List: React.FC<Props> = ({ people, setState, confirmed }) => {
  const handleRemovePerson = (i: number): void => {
    people.splice(i, 1);
    setState((prev) => ({ ...prev, people: [...people] }));
  };
  const handleConfirmPerson = (i: number): void => {
    let confirmedPerson = people.splice(i, 1);
    setState((prev) => ({
      ...prev,
      confirmed: [...prev.confirmed, ...confirmedPerson],
    }));
  };
  const handleUnConfirmPerson = (i: number): void => {
    let unConfirmedPerson = confirmed.splice(i, 1);
    setState((prev) => ({
      ...prev,
      confirmed: [...confirmed],
      people: [...prev.people, ...unConfirmedPerson],
    }));
  };

  const renderList = (arr: any[], str: string): JSX.Element[] =>
    arr.map((person, index) => (
      <li className="List" key={index}>
        <div className="List-header">
          <img src={person.url} alt="" className="List-img" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
        <div className="List-btn">
          {str ? (
            <button
              className="List-add-btn"
              onClick={() => handleConfirmPerson(index)}
            >
              {str}
            </button>
          ) : null}
          <button
            className="List-delete-btn"
            onClick={() =>
              str === "confirmed"
                ? handleRemovePerson(index)
                : handleUnConfirmPerson(index)
            }
          >
            {str === "confirmed" ? "Remove" : "Unconfirmed"}
          </button>
        </div>
      </li>
    ));

  return (
    <ul className="list">
      <br />

      {people.length ? (
        <>
          <h3 className="info txt-start">All listed persons </h3>
          {renderList(people, "confirmed")}
        </>
      ) : null}

      <br />

      {confirmed.length ? (
        <>
          <h3 className="info txt-start">Confirmed persons</h3>
          {renderList(confirmed, "")}
        </>
      ) : null}
    </ul>
  );
};

export default List;
