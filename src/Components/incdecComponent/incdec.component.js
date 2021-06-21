import React, { useReducer } from "react";

const IncreDcre = () => {
  const [value] = React.useState(0);
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "Inc") {
      return state + 1;
    }
    if (action.type === "Dec") {
      return state - 1;
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, value);
  return (
    <div>
      <p>{state}</p>
      <div className="btnStylePosition">
        <button onClick={() => dispatch({ type: "Inc" })}>Inc</button>
        <button onClick={() => dispatch({ type: "Dec" })}>Dec</button>
      </div>
    </div>
  );
};

export default IncreDcre;
