// ?React Hook

// !function based component using useState
// import React, { useState } from "react";

// const App = () => {
//     let state = useState("Shahsi");
//     return (
//         <>
//             <h1>i AM functional based component.with React Hook our trainer name is { state}</h1>
//         </>
//     )
// }
// export default App;



// =======================================
//! Rules for React Hooks

// import React from "react";
// import { useState } from "react";


// let App = () => {
    // ! can not call inside a callback or nested function
    // setTimeout(() => {
    //     window.alert("Please execute ")
    //     let username=useState("Shashi")
    // }, 1000)
    
    // !can not call inside the if & else block
//     if (true) {
//         console.log(true);
//         let username = useState("Shashi")
//     }
//     else {
//         console.log("it is nt ture")
    // }

    // ! can not call inside the a loop

    // for (let i = 0; i <= 100; i++){
    //     let username=useState("Shahsi")
    // }
// }

// ===========================================================
// ! Functional based component using the JSON method
// import React, { Fragment, useState } from "react";

// import JSON from "./State.json"

// const App = () => {
//     let [value, setvalue] = useState(JSON);
//     console.log(value)
//     return (
//         <section id="courseBlock">
//             <article>
//                 {
//                     value.map((val, index) => {
//                         return (
//                             <Fragment key={index + 1}>
//                                 <div className="container">
//                                     <h1>{val["course-name"]}</h1>
//                                     <p>Trainer:{val.Trainer}</p>
//                                     <p>Duration:{val.Duration}</p>
//                                     <p>language: { val.Language}</p>
//                                 </div>
//                             </Fragment>
//                         )
//                     })
//             }
//             </article>
//         </section>
//     )
// }
// export default App
// ===================================

// !useState with array destructuing

// import React, { useState } from 'react';

// const App = () => {
//     let [val, setValue] = useState(true);//!return the array
//     if (val === true ) {
//         return <button>i am online ready to chat</button>
//     }
//     else {
//         return <button>i am offline not ready to chat</button>
//     }
// }
// export default App


// ==================================================
// !How array destructuing works

// let courses = ["java", "js", "python", "html"]

// let java = courses[0];
// let js = courses[1];
// let py = courses[2];
// let html = courses[3];

// console.log(java, js, py, html);

// let useTrainer = (trainer, skills) => {
//     return [trainer,skills]
// }

// let [val,setValue]=userTrainer