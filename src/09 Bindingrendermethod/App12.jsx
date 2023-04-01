// ? this is only applicable for class based component

// !Constructor way
// import React, { Component } from 'react'

// export default class App12 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count:2
//         }
//         this.increment = this.increment.bind(this);
//     }

//     increment() {
//         this.setState({count:this.state.count+10})
//     }
//   render() {
//     return (
//         <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={this.increment}>increment</button>
//       </div>
//     )
//   }
// }


// ! 2nd way using Arrow function

// import React, { Component } from 'react'

// export default class App12 extends Component {
//     state = {
//         count:0
//     }
//     increment = () => {
//         this.setState({count:this.state.count+1})
//     }
//   render() {
//     return (
//       <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={this.increment}>increment</button>
//       </div>
//     )
//   }
// }

// !3rd way inline binding
import React, { Component } from 'react'

export default class App12 extends Component {
    state = {
        count:0
    }
    increment() {
       // console.log(this)//Pointing towards window object
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
        <div>
            <h1>{this.state.count}</h1>
!inline binding
            <button onClick={this.increment.bind(this)}>increment</button>
      </div>
      
    )
  }
}


// !4th way inline Arrow function with function invoking

// import React, { Component } from 'react'

// export default class App12 extends Component {
//     state = {
//         count:0,
//     }
//     increment() {
//         console.log(this);//pointing towards window object
//         this.setState({count:this.state.count+1})
//     }
//   render() {
//     return (
//       <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={()=>this.increment()}>Increment</button>
//       </div>
//     )
//   }
// }




// ========================================
// ! change event using Arrow function

// import React, { Component } from 'react'

// export default class App12 extends Component {
//     state = {
//         username:"Shashi"
//     }
//     changeName(name){
//     this.setState({username:name})
//     }
//   render() {
//     return (
//       <div>
//             <h1>{this.state.username}</h1>
//             <button onClick={()=>this.changeName("Manu")}>Change Name</button>
//       </div>
//     )
//   }
// }


// =================================
// !Change event using toggle

// import React, { Component } from 'react'

// export default class App12 extends Component {
//     state = {
//         toggle:true
//     }
//     changeBodycolor=()=>{
//         this.setState({ toggle: !this.state.toggle })
//         if (this.state.toggle === true) {
//             document.body.style.background="red"
//         }
//         else {
//             document.body.style.background = "green";
//         }
//     }
//   render() {
//     return (
//         <div>
//            <button onClick={this.changeBodycolor}>change body color</button>
//       </div>
//     )
//   }
// }
