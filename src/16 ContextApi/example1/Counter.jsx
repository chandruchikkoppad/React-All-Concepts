import React, { useContext } from "react";
import { counterContext } from "./CounterContext";

const Counter = () => {
  let { count, Increment, Decrement, Reset } = useContext(counterContext);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset }>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
