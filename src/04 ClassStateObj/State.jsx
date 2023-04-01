// ! Using constructor method
// import React, { Component } from 'react'

// export default class State extends Component {

// ?Using constructor

//     constructor() {
//         super();
//? here we are created the state object and it is stroed inside the component. check in inspect
//         this.state = {
//             company:"TY"
//         }
//     }
//   render() {
//     return (
//       <div>
//             <h1>{this.username + "" + "Without state object "}</h1>
//             <p>{ this.state.company+""+"With state object"}</p>
//       </div>
//     )
//   }
// }

// =================================
// ! Directly declaring variable but it is not recommended

// import React, { Component } from 'react'

// export default class State extends Component {
//      username = "Shashi"//!it stores the data internally . it is just a variable it will not store inside the component
//    constructor() {
//         super();
//         //! here we are created the state object and it is stroed inside the component. check in inspect
//         this.state = {
//             company:"TY"
//         }
//     }
//   render() {
//     return (
//       <div>
//             <h1>{this.username + "" + "Without state object "}</h1>
//             <p>{ this.state.company+""+"With state object"}</p>
//       </div>
//     )
//   }
// }
// =================================================
//! Using state Property
// import React, { Component } from 'react'

// export default class State extends Component {

//     state = {
//         username: "Shashi",
//         company:"TYSS"
//     }
//   render() {
//     return (
//       <div>
//             <h1>{this.state.username + "" + "Without state object "}</h1>
//             <p>{ this.state.company+""+"With state object"}</p>
//       </div>
//     )
//   }
// }

// =================================================================
// !Example using Array

// import React, { Fragment } from "react";
// class App extends React.Component{
//     state={language: ["java","js","node js","React js", "go","ruby"]}
//     render() {
//         return (
//             <Fragment>
//                 {
//                     this.state.language.map(function (value, index) {
//                         return <Fragment key={index+1}>{ value}</Fragment>
//                     })
//                 }
//             </Fragment>
//         )
//     }
// }
// export default App

//  !Using the constructor

// import React, { Component } from 'react'

// export default class State extends Component {
//     constructor() {
//         super()
//         this.state = {
//           courses: [
//             {
//               "course-name": "MernStack",
//               Trainer: "Shahsi",
//               Duration: 3,
//               Languages: [
//                 "html",
//                 "css",
//                 "js",
//                 "nodejs",
//                 "reactjs",
//                 "express js",
//                 "mongodb",
//               ]
//             },
//             {
//               "course-name": "JavaStack",
//               Trainer: "Dixith",
//               Duration: 3,
//               Languages: [
//                 "html",
//                 "css",
//                 "js",
//                 "nodejs",
//                 "reactjs",
//                 "Spring",
//                 "Hibernate",
//                 "mongodb",
//               ]
//             },
//             {
//               "course-name": "PythonStack",
//               Trainer: "Gagan",
//               Duration: 3,
//               Languages: [
//                 "html",
//                 "css",
//                 "js",
//                 "nodejs",
//                 "reactjs",
//                 "Python",
//                 "django",
//                 "mongodb",
//               ],
//             }
//           ]
//         };
//     }
//   render() {
//     return (
//       <section id="courseBlock">
//             <article>{
//                 this.state.courses.map((value,index) => {
//                     return (
//                         <div className='container'>
//                             <h1>{value['course-name']}</h1>
//                             <p>{value.Trainer}</p>
//                             <p>{value.Duration}</p>
//                             <p>{value.Languages.map((val) => {
//                               <span key={index + 1}>{val}</span>
//                             })}</p>
//                         </div>
//                     )
//                 })
//             }</article> 
//       </section>
//     );
//   }
// }

// !Using JSON object

// import React, { Component } from "react";
// import JSON from "./State.json";

// export default class State extends Component {
//   state = {
//     course: JSON,
//   };
//   render() {
//     return (<section id="courseBlock">
//         <article>
//           {this.state.course.map((value, index) => (
//             <div className="container" key={index+1}>
//               <h1>{value["course-name"]}</h1>
//               <p>Trainer :{value.Trainer}</p>
//               <p>Duration :{value.Duration}</p>
//               <p>
//                 Languages :
//                 {value.Languages.map(lang => (
//                   <span key={index + 1}>{lang}</span>
//                 ))}
//               </p>
//             </div>
//           ))}
//         </article>
//       </section>
//     );
//   }
// }


