import React, { useReducer, useContext } from "react";

//-----1. creating initial state and reducer function
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

//-----2.creating context:
const CountContext = React.createContext();

//-----3. provider to the context with using reduce hook
const CountProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};

//----4. using context
const useCount = () => {
  const contextValue = useContext(CountContext);
  return contextValue;
};

//-----5. using the context+reduce function:

const Counter = () => {
  const [count, dispatch] = useCount(); //with reduce and context hook
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "set", count: 0 })}>reset</button>
    </div>
  );
};

//-----6. using all of them in one component
const ReducerContext = () => {
  return (
    <div>
      <h4>Reducer Hook with Context Hook</h4>
      <CountProvider>
        <Counter />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default ReducerContext;
