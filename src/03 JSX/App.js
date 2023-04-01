
//?without JSX and react elements

import React, { Component } from "react";
class App extends Component{
    render() {
        let form = React.createElement("form", { action: "#", method: "get" },

            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "email" }, "email"),
                React.createElement("input", { type: "email", id: "email" })
            ),
            React.createElement("div", {className: "form-group"},
                React.createElement("label",{htmlFor:"password"},"password"),
            React.createElement("input", { type: "password", id: "password" })),
        React.createElement("div",{className:"form-group"},React.createElement("button",{className:"btn"},"submit"))
        )
        return form
    }
}

export default App;

// ==================================

// ?with jsx
// import React from "react";

// class App extends React.Component{
//     render() {
//         return (
//           <form>
//             <div className="form-group">
//               <label htmlFor="email">Email</label> <br />
//               <input type="email" id="email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label> <br />
//               <input type="password" id="password" />
//             </div>
//             <div className="form-group">
//             <button className="btn">Submit</button>
//             </div>
//           </form>
//         );
//     }
// }
// export default App