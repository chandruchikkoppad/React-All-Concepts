// import React from "react";
// import { useRef } from "react";
// import { useState } from "react";

// const UseRef = () => {
//   let [count, setCount] = useState(0);
//   const Ref = useRef(2);
//   let handleInc = () => {
//     Ref.current += 1;
//     setCount(Ref.current);
//   };
//   let handleDec = () => {
//     Ref.current -= 1;
//     setCount(Ref.current);
//   };
//   let handleReset = () => {
//     Ref.current = 0;
//     setCount(Ref.current);
//   };

//   return (
//     <div>
//       <h1>{Ref.current}</h1>
//       <button onClick={handleInc}>+</button>
//       <button onClick={handleDec}>-</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default UseRef;

// ==========================================
// ! special case  add the value using previous state

import React from "react";
import { useRef } from "react";
import { useState } from "react";

const UseRef = () => {
  let [count, setCount] = useState(0);
  const Ref = useRef(0);
  let handleInc = () => {
    setCount((pre) => pre + 1); //adding the value based on the pre value
    Ref.current += 1;
  };
  let handleDec = () => {
    Ref.current -= 1;
    setCount((pre) => pre - 1); //subtracting the value using the pre value
  };
  let handleReset = () => {
    Ref.current = 0;
    setCount(0);
  };

  return (
    <div>
      <h1>{Ref.current}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default UseRef;
