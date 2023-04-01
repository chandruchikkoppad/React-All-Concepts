// import React, { Component } from 'react'

// export default class ClassbasedComponent extends Component {
//     state = {
//         count: 0,
//     }
//     Increment = () => {
//         this.setState({count:this.state.count+1})
//     }
//     componentDidMount() {
//         console.log("No re render.....😂😂😂 componentDidMount")
//         window.document.title=`You are clicked ${this.count} times` //it is not work because its only for Mounting
//     }
//     componentDidUpdate() {
//          window.document.title = `You are clicked ${this.count} times`;
//     }
//   render() {
//     return (
//         <div>ClassbasedComponent
//             <h1>{this.state.count}</h1>
//             <button onClick={this.Increment}>Increment</button>
//       </div>
//     )
//   }
// }


// =================================\
// ! componentDidUpdate
// import React, { Component } from "react";

// export default class ClassbasedComponent extends Component {
//   state = {
//     count: 0,
//   };
//   Increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   componentDidMount() {
//     console.log("No re render.....😂😂😂 componentDidMount");
//     window.document.title = `You are clicked ${this.state.count} times`; //it is not work because its only for Mounting
//   }
//   componentDidUpdate() {
//     window.document.title = `You are clicked ${this.state.count} times`;
//   }
//   render() {
//     return (
//       <div>
//         ClassbasedComponent
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>Increment</button>
//       </div>
//     );
//   }
// }

// =======================
// ! componentWillUnmount

import React, { Component } from "react";

export default class ClassbasedComponent extends Component {
  state = {
    count: 0,
  };
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // componentDidMount() {
  //   console.log("No re render.....😂😂😂 componentDidMount");
  //   window.document.title = `You are clicked ${this.state.count} times`; //it is not work because its only for Mounting
  // }
  componentDidUpdate() {
    window.document.title = `You are clicked ${this.state.count} times`;
  }
  componentWillUnmount() {
    
    console.log("clean up the data");
  }
  render() {
    return (
      <div>
        ClassbasedComponent
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>Increment</button>
      </div>
    );
  }
}
