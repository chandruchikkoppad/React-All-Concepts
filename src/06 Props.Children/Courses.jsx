// ?Default props

// ! Functional based component
// import React from 'react'
//!Destructuring inside the function
// const Courses = ({coursename,trainer,duration,children}) => {
//   return (
//     <div>
//           <h1>{coursename}</h1>
//           <p>Trainer:{trainer}</p>
//           <p>Duration:{duration}</p>
//           {children}
//     </div>
//   )
// }

// export default Courses

// =========
// ? default value will execute in the absence of actual props value.
// !Setting the default props

// Courses.defaultProps = {
//     coursename: "c#",
//     trainer: "Shashi",
//     duration:"3Months"
// }

// ===============================
// ? Other way using functional based component
// !Seeting default value using javascript or operator

// import React from 'react'

// const Courses = ({coursename,trainer,duration,children}) => {
//   return (
//     <div>
//           <h1>{coursename || "Dotnet"}</h1>
//           <p>Trainer:{trainer || "Shashi"}</p>
//           <p>Duration:{duration ||"3 Months"}</p>
//           {children}
//     </div>
//   )
// }

// export default Courses

// ========================================================
// ? Class based component we can write in 3 ways


import React,{ Component } from 'react'

export default class Courses extends Component {
// !using the static default property inside the component
  //   static defaultProps = {
  //       cousername: "dotnet",
  //       trainer: "Shashi",
  //     duration: "4months",
  // }
  render() {
    let { coursename, trainer, duration, children } = this.props;
    return (
      <div>
        <h1>{coursename || "Node JS"}</h1>
        <p>{trainer || "Manoj"}</p>
        <p>{duration || "1 week"}</p>
        <hr />
        <div>{children}</div>
      </div>
    );
  }
}

    //// !using the or operator inside the expression

// ===========================
//// !Outside the component
// Courses.defaultProps = {
//     coursename: "c#",
//     trainer: "Shashi",
//     duration:"3Months"
