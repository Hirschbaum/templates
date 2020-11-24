import React, { useReducer } from "react";

const initialState = {
  count1: 0,
  count2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, count1: state.count1 + 1 };
    case "decrement1":
      return { ...state, count1: state.count1 - 1 };
    case "set1":
      return { ...state, count1: action.count };
    case "increment2":
      return { ...state, count2: state.count2 + 1 };
    case "decrement2":
      return { ...state, count2: state.count2 - 1 };
    case "set2":
      return { ...state, count2: action.count };
    default:
      throw new Error("unexpected action");
  }
};

const ReducerObject = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h4>Reducer Hook with Object Action</h4>
        <p>Count1 Object Action:</p>
        {state.count1}
        <button onClick={() => dispatch({ type: "increment1" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement1" })}>-1</button>
        <button onClick={() => dispatch({ type: "set1", count: 0 })}>
          reset
        </button>
      </div>
      <div>
        <p>Count2 Object Action:</p>
        {state.count2}
        <button onClick={() => dispatch({ type: "increment2" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement2" })}>-1</button>
        <button onClick={() => dispatch({ type: "set2", count: 0 })}>
          reset
        </button>
      </div>
    </div>
  );
};

export default ReducerObject;
