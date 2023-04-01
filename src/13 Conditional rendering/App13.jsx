// !Class based component

// import React, { Component } from 'react'

// export default class App13 extends Component {
//   state = {
//     isAuthenticated: true,
//   };
//   render() {
//     if (this.state.isAuthenticated) {
//       return (
//         <div className="authUser">
//           <button>Madappa</button>
//           <button>Log out</button>
//         </div>
//       );
//     } else {
//       return (
//         <div className="guestUser">
//           <button>Login</button>
//           <button>Register</button>
//         </div>
//       );
//     }
//   }
// }

// =================================
// ! Functional based component

// import React,{useState} from 'react'

// const App13 = () => {
//     let [isAuthenticated, isisSetAuthenticated] = useState(true)
//     if (isAuthenticated) {
//       return( <div>
//             <button>Logout</button>
//       </div>
//       )
//     }
//     else {
//       return(
//         <>
//           <button>login</button>
//           <button>signUp</button>
//         </>
//       )
//     }
// }

// export default App13

// !Function based with switch case

// import React,{useState} from 'react'

// const App13 = () => {
// let [isAuthenticated,isisSetAuthenticated]=useState(false)
//     switch (isAuthenticated) {
//       case true:
//         return (
//           <>
//             <h1>Welcome to Test Yantra</h1>
//             <p>Madappa</p>
//             <button>Logout</button>
//           </>
//         );
//       case false:
//         return (
//           <>
//             <button>Sign in</button>

//             <button>Login</button>
//           </>
//         );

//     }
// }

// export default App13

// ! Functional based using ternary operator

// import React, { Fragment } from 'react'

// const App13 = () => {
//     let [isAuthenticated, isisSetAuthenticated] = useState(true)
//     return (
//       <>{
//         isAuthenticated?<><h1>Welcome to TestYantra</h1> <p>Welcome Madappa</p> <button>Logout</button></>
//       }
//       </>
// )

// export default App13

// ! Conditional rendering using inline component

// import React,{useState} from 'react'

// const App13 = () => {
//     let [isAuthenticated, isisSetAuthenticated] = useState(true)
//     let IsAuthUser = () => {
//         return (
//             <div>
//                 <h1>WelCome to TestYAntra</h1>
//                 <p>Welcom</p>
//                 <button>Logout</button>
//             </div>
//         );
//     }
//     let IsAnonymousUser = () => {
//         return (
//             <div>
//                 <button>SignUp</button>
//                 <button>Logout</button>
//             </div>
//         );
//     }
//     return <>{isAuthenticated === true ? <IsAuthUser /> : <IsAnonymousUser />}</>
// }
// export default App13

// ========================================================
// ! Using importing the component
// import React,{useState} from 'react'
// import IsAuthUser from './IsAuthUser';
// import IsAnonymousUser from './IsAnonymousUser';

// const App13 = () => {
//     let [isAuthenticated, isisSetAuthenticated] = useState(true)

//     return <>{isAuthenticated === true ? <IsAuthUser /> : <IsAnonymousUser />}</>
// }
// export default App13

// ==============================================
// !Logical AND (short circuit)

// import React,{useState} from 'react'

// const App13 = () => {
//     let [messages,setMessages]=useState(["Shashi is good","Harish is good","Shivu","Gagan is good","Sanjay is very very bad boy"])
//   return (
//       <div>
//           <h2>
//               messages<sup>{messages.length >0 && messages.length}</sup>
//           </h2>
//     </div>
//   )
// }

// export default App13

// !Condition rendering using the Element

// import React from 'react'
// import { useState } from 'react';

// const App13 = () => {
//     let [isLoggedIn, setIsLoggedIn] = useState(true);
//     // !AuthButton is a element
//     let AuthButton;
//     if (isLoggedIn) {
//         AuthButton=<button>Logout</button>
//     }
//     else {
//         AuthButton=<button>Login</button>
//     }
//     return <>{AuthButton}</>//!Element should be write inside the angular braces i.e:<>
// }
// export default App13

// !Conditionally rendering the CSS

// import React from 'react'
// import { useState } from 'react';

// const App13 = () => {
//     let [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//       <>{isLoggedIn ? (<><button className={isLoggedIn === true ? "active" : ""}>Logout</button>
//       </>)
//           : (
//               <button>Login</button>
//           )}
//       </>
//   )
// }

// export default App13

// =======================================================
// ! Task to change the rating color using the conditional rendering

// import React,{useState} from 'react'
// import JSON from './product.json'
// const App13 = () => {
//     let[state,setState]=useState(JSON)
//   return (
//       <section id='mainBlock'>
//           <article>
//               <div>
//                   <h1>List of Products</h1>
//                   <table>
//                       <thead>
//                           <tr>
//                               <th>Image</th>
//                               <th>id</th>
//                               <th>Title</th>
//                               <th>Description</th>
//                               <th>Price</th>
//                               <th>Rating</th>
//                           </tr>
//                       </thead>
//                       <tbody>
//                           {
//                               state.map((products, index) => {
//                                   return (
//                                       <tr key={index+1}>
//                                           <td><img src={products.image} alt={products.title} /></td>
//                                           <td>{products.id }</td>
//                                           <td>{ products.title}</td>
//                                           <td>{products.description}</td>
//                                           <td>{ products.price}</td>
//                                           <td style={products.rating.rate>4 ? {color:"Green"}:products.rating.rate<4 &&products.rating.rate>3?{color:"orange"}:{color:"red"} }>{ products.rating.rate}</td>
//                                       </tr>
//                                  )
//                              })
//                           }
//                       </tbody>
//                   </table>
//               </div>
//           </article>
//   </section>
//   )
// }

// export default App13

// ======================================
// ! Example :Logical AND operator (Short circut)

// import React from "react";
// import { useState } from "react";

// const App13 = () => {
//   let [value, setvalue] = useState([
//     {
//       username: "manu",
//       salary: 20000,
//     },
//     {
//       username: "Shashi",
//       salary:2000000
//     }
//   ]);
//   return <div>
//     {
//       value.length > 0 && value.map(val => {
//         return (
//           <><h1>{val.username }</h1></>
//         )
//       })
//     }
//   </div>;
// };

// export default App13;

// =====================
// ! Using IIFE

// import React from "react";

// const App13 = () => {
//   return (
//     <div>
//       {(() => {
//         let x = "Madappa";
//         return <h1>{x}</h1>;
//       })()}
//       {
//         (() => {
//           let company = "TYSS"
//           return <h1>{ company}</h1>
//         })()
//       }
//     </div>
//   );
// };

// export default App13;

// =============
// !Using IIFE by assigning the parameter
import React from "react";

const App13 = () => {
  return (
    <div>
      {((name) => {
       
        return <h1>{name}</h1>;
      })("Madappa")}
      {((company) => {
       
        return <h1>{company}</h1>;
      })("TYSS")}
    </div>
  );
};

export default App13;