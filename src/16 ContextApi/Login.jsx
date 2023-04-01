// ! Consumer

// ! Function based component  using consumer

// import React from "react";
// import { MyJioContextApi } from "./JioContext";

// const Login = () => {
//   return (
//     <div>
//       <MyJioContextApi.Consumer>
//         {value => {
//           return (
//             // ! if we change the value in children props value will be updated but parent value remain same
//             // ! WE can add the new key and value pair 
//             <>
//               <h1>Network name:{value.networkName = "Airtel"}</h1>
//               <h2>Company name:{ value.company="Tyss"}</h2>
//               Plans:
//               {value.price.map(net => {
//                 return <button>{net}</button>;
//               })}
//             </>
//           );
//         }}
//       </MyJioContextApi.Consumer>
//     </div>
//   );
// };

// export default Login;

// =============================

// ! Class based component

// import React, { Component } from 'react'
// import { MyJioContextApi } from './JioContext'
// import { Fragment } from 'react';

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
//             <MyJioContextApi.Consumer>
//                 {
//                     value => {
//                         return (
//                             <>
//                                 <h1>NetWork Name:{value.networkName}</h1>
//                                 <div>
//                                     Plans:{""}
//                                     {value.price.map((net, i) => {
//                                         return (
//                                             <Fragment key={i}>
//                                                 <button>{ net}</button>
//                                             </Fragment>
//                                         )
//                                     })}
//                                 </div>
//                             </>
//                         )
//                     }
//                 }
//         </MyJioContextApi.Consumer>
//       </div>
//     )
//   }
// }

// ======================================
// ! useContext
import React,{Fragment, useContext} from 'react'
import { MyJioContextApi } from './JioContext'
const Login = () => {
    let { networkName, price } = useContext(MyJioContextApi);
  return (
    <div>
          <h1>NetWork name:{networkName}</h1>
          <div>
              plans:
              {
                  price.map((jio, i) => {
                      return <Fragment key={i}>
                          <button>{ jio}</button>
                      </Fragment>
                  })
              }
          </div>
    </div>
  )
}

export default Login

// ! Context type using class based component

// import React, { Component } from 'react'
// import {MyJioContextApi} from './JioContext'
// export default class Login extends Component {
//     render() {
//       let value=this.context
//     return (
//         <div>
//             <h1>Network:{value.networkName}</h1>
//             <div>
//                 Plans:{
//                     value.price.map(x => (<button>{ x}</button>))
//                 }
//             </div>
//       </div>
//     )
//   }
// }
// Login.contextType = MyJioContextApi;//! very very important

