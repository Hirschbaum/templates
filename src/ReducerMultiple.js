import React from "react";
import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "set":
      return action.count;
    default:
      throw new Error("Unexpected action");
  }
};

const ReducerMultiple = () => {
  const [count1, dispatch1] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Reducer Hook Multiple</h4>
      <div>
        <p>Multiple - Count1</p>
        {count1}
        <button onClick={() => dispatch1({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch1({ type: "decrement" })}>-1</button>
        <button onClick={() => dispatch1({ type: "set", count: 0 })}>
          {" "}
          {/*count: from the reducer function */}
          reset
        </button>
      </div>
      <div>
        <p>Multiple - Count2</p>
        {count2}
        <button onClick={() => dispatch2({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch2({ type: "decrement" })}>-1</button>
        <button onClick={() => dispatch2({ type: "set", count: 0 })}>
          reset
        </button>{" "}
        {/*count: from the reducer function */}
      </div>
    </div>
  );
};

export default ReducerMultiple;
