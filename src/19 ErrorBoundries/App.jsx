// ! Error boundries

// import React, { Component } from 'react'
// import ErrorBoundreies from './ErrorBoundreies'
// import User from './User';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <ErrorBoundreies>
//           <User username="Shashi" />
//           <User username="Manu" />
//           <User username="Sanjay" />
//         </ErrorBoundreies>
//       </div>
//     );
//   }
// }

// =============================
import React, { Component } from "react";
// ! Reactlazy loading
// ! impoerting the file using  react lazy
// ! suspense is complusory when we use the react.lazy load

let User = React.lazy(() => import("./User"));
export default class App extends Component {
  render() {
    return (
      <div>
        <React.Suspense>
          <User username="Shashi" />
          <User username="Manu" />
          <User username="Sanjay" />
        </React.Suspense>
      </div>
    );
  } 
}
