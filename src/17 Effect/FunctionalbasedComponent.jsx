// import React,{useState,useEffect} from 'react'


// const FunctionalbasedComponent = () => {
//     let [count, setCount] = useState(0)
//     let Increment = () => {
//         setCount(count + 1);
//   }
//   // ! it is for both componentDidMount & DidUpdate
//     useEffect(() => {
//       console.log("no re render useEffect but it renders many time ");
//     },[])
//   return (
//     <div>
//       FunctionalbasedComponent
//       <h1>{count}</h1>
//       <button onClick={Increment}>Increment</button>
//     </div>
//   )
// }
// export default FunctionalbasedComponent;

// =========================
// !ComponentDidUpdate using the functional based component

import React, { useState, useEffect } from "react";

const FunctionalbasedComponent = () => {
  let [count, setCount] = useState(0);
  let Increment = () => {
    setCount(count + 1);
  };
  // ! it is for both componentDidMount & DidUpdate
  useEffect(() => {
    console.log("no re render useEffect but it renders many time ");
    document.title = `You are clicked ${count} times`
    return () => {
      console.log("clear the data");
    }
  }, [count]);
  return (
    <div>
      FunctionalbasedComponent
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};
export default FunctionalbasedComponent;












// =====================================

// !window resize

// import React,{useEffect,useState} from 'react'

// const FunctionalbasedComponent = () => {
//   let [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     window.addEventListener("resize", () => {
//       setWidth(window.innerWidth)
//     })
//     console.log(`Please Check now how many time dom renders..${width}`);
//   })
//   return (
//     <div>FunctionalbasedComponent</div>
//   )
// }

// export default FunctionalbasedComponent