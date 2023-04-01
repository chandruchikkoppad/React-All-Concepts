// !Function based props
// import React from 'react'

// const Childcomponent = props => {
//     // console.log(props)
//   return (
//     <div>
//           <h1>i am a Childcomponent</h1>
//           <h2>My name is{props.state}</h2>
//     </div>
//   );
// }

// export default Childcomponent;

// !Class based component props

// import React, { Component } from "react";

// export default class Childcomponent extends Component {
//   render() {
//     return <div>
//       <h1>User name is {this.props.username}</h1>
//       <p>Password is { this.props.password}</p>
//     </div>;
//   }
// }

// !Receving object data from parent

// import React, { Component } from 'react'

// export default class Childcomponent extends Component {
// ! Destructuring the object
//   render() {
//     let {frontend,backend,database}=this.props.mernStack
//     return (
//       <div>
//         <div className="frontend">
//           <h1>Frontend Skills</h1>
//           {frontend.map((val, index) => {
//             return (
//               <ul key={index + 1}>
//                 <li>{val}</li>
//               </ul>
//             );
//           })}
//         </div>
//         <div className="backend">
//           <h1>Backend Skills</h1>
//           {backend.map((val, index) => {
//             return (
//               <ul key={index + 1}>
//                 <li>{val}</li>
//               </ul>
//             );
//           })}
//         </div>
//         <div className="database">
//           <h1>Database Skills</h1>
//           {database.map((val, index) => {
//             return (
//               <ul key={index + 1}>
//                 <li>{val}</li>
//               </ul>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// !Receving data as a Array

// import React, { Component } from "react";

// export default class Childcomponent extends Component {
//   render() {
//     return (
//       <div>
//         <h1>list of data</h1>
//         <ul>
//           {this.props.language.map((lang, index) => {
//             return <li key={index + 1}>{lang}</li>;
//           })}
//           ;
//         </ul>
//       </div>
//     );
//   }
// }

// ==========================
// !Receving the data as a boolean

// import React from "react";
// import { Fragment } from "react";

// const Childcomponent = props => {
//   console.log(props);
//   if (props.isAvailable) {
//     return (
//       <Fragment>
//         <h1>Products</h1>
//         <button className="active">T-Shirt 10</button>
//       </Fragment>
//     );
//   } else {
//       return (
//           <Fragment>
//       <h1>Products</h1>
//       <button className="outofStock">Out of stock</button>
//     </Fragment>
//       )
    
//   }
// };

// export default Childcomponent;

// ===========================
// !Receiving the data using props with null and json

// import React from 'react'

// const Childcomponent = (props) => {
//     if (props.isAvailable === null) {
//         return (
//             <>
//                 <button className='outofstock'>Out of Stock</button>
//             </>
//         );
//     }
//     else {
//         return (
//           <>
//             <h1>List of Product</h1>
//                 <ul>
//                     {props.products.map((val, index) => {
//                         return <li key={index + 1}>{ val.title}</li>
//                    })}
//             </ul>
//           </>
//         );
//     }
// }
// export default Childcomponent

// ===================
// !receving the props as a state

// import React from 'react'

// const Childcomponent = (props) => {
// console.log(props);
//   return (
//       <div>
//           <h1>List of trainers</h1>
//       <ul>
//         {props.state.users.map(x => 
//          <li>{x}</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default Childcomponent

// !Receving the funtion and state from parent

import React from 'react'

const Childcomponent = (props) => {
  // ! since it is a function based component if we use the this key word inside the expression we will get error i.e:TypeError: Cannot read properties of undefined (reading 'props')
  // ! Ex:<button onClick={this.props.decrement}>Decrement</button>
  return (
    <div>
      <h1>{props.sendcount}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

export default Childcomponent
