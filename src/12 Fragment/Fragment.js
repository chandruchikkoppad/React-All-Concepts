
// ? if we wants to add the css we should follow the parent element ex:div,section,p
// ! if we wants to reconciliation we should mention the key
//? if we don't want to add css no need to mention the Fragment inside the <> </> 

// import React, {Fragment} from "react";

// class App extends React.Component{
//     render() {
//         return <>
//             <h1>Helo i am Fragment</h1>
//             <h2>If we don't want to pass key empty angular braces </h2>
//         </>
//     }
// }
// export default App


import React, { Fragment } from "react";

class App extends React.Component {
  render() {
    return (
      <Fragment key="{1}">
        <h1>Helo i am Fragment</h1>
        <h2>If we don't want to pass key empty angular braces </h2>
      </Fragment>
    );
  }
}
export default App;