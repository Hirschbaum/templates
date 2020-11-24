import React from "react";
import { useReducer } from "react";

const inititalState = "";
const reducer = (state, action) => action; //=> it means that the old state thrown away each time reducer is called

const TextInput = ({ value, onChangeText }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChangeText(e.target.value)}
  />
);

const ReducerInput = () => {
  const [firstName, changeFirstName] = useReducer(reducer, inititalState);
  const [lastName, changeLastName] = useReducer(reducer, inititalState);

  console.log(firstName, lastName);

  return (
    <div>
      <h4>Reducer Hook with Text Inputs</h4>
      <div>
        First Name:
        <TextInput value={firstName} onChangeText={changeFirstName} />
      </div>
      <div>
        Last Name
        <TextInput value={lastName} onChangeText={changeLastName} />
      </div>
    </div>
  );
};

export default ReducerInput;
