// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   let [state,setState]=useState(0)

// let increment=()=>{

// setState(state+1)
// }
// let decrement=()=>{
//   setState(state-1)

// }
// let reset=()=>{
//   setState(0)
// }
//   return (
//     <div>
//       <div>
//        {state} 
//       </div>
//       <button onClick={increment}>inc</button><button onClick={decrement}>dec</button> <button onClick={reset}>reset</button>
//     </div>
//   )
// }
// export default App


// =======================================
// import React, { Component } from 'react'

// export default class App extends Component {
//   state={
//     count:0
//   }
//  increment=()=>{
//   this.setState({count:this.state.count+1})
//  }
//  decrement=()=>{
//   this.setState({count:this.state.count-1})
//  }
//  reset=()=>{
//  this.setState({ count:0})
//  }
//   render() {
//     return (
//       <div>
//         <div>{this.state.count}</div>
//         <button onClick={this.increment}>inc</button><button onClick={this.decrement}>dec</button><button onClick={this.reset}>res</button>
//       </div>
//     )
//   }
// }

import React from 'react'
import Auth from './contextapi/auth/Auth'

const App = () => {
  return (
    <div>
      <Auth/>
    </div>
  )
}

export default App


