import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("unexpected action");
  }
};

export default function ReducerA() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ margin: "0.25em" }}>
      <h4>Reducer Hook - version 1</h4>
      {count}
      <button
        style={{ margin: "0.25em" }}
        onClick={() => dispatch("increment")}
      >
        +1
      </button>
      <button
        style={{ margin: "0.25em" }}
        onClick={() => dispatch("decrement")}
      >
        -1
      </button>
      <button style={{ margin: "0.25em" }} onClick={() => dispatch("reset")}>
        reset
      </button>
    </div>
  );
}
