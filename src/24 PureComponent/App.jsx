// ! Class based component
// import React, { Component } from 'react'

// export default class App extends Component {
//     state = {
//         count:0,
//     }
//   render() {
//     return (
//       <section>
//             <article>
//                 <main>
//                     <h1>{this.state.count}</h1>
//                     <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
//                 </main>
//         </article>
//       </section>
//     )
//   }
// }

// ! Functional based component

// import { useState } from "react";
// import ChildComponent from './ChildComponent'

// const App = () => {
//   let [state, useSatte] = useState("");
 
//   return (
//     <section>
//       <article>
//         <main>
//           <h1>{this.state.count}</h1>

//           <button
//             onClick={() => {
//               this.setState( count + 1 );
//             }}
//           >
//             Increment
//           </button>
//         </main>
//       </article>
//     </section>
//   );
// };

// export default App;



// ! useMemo

import React,{useState,useMemo } from 'react'
import ChildComponent from './ChildComponent'
const App = () => {
  let [count, setCount] = useState(0)
  // ! 1st way using state
  // let [array, setArray] = useState(["shashi", "manu"])
  let array = useMemo(() => ["shashi", "manu"], []);
  return (
    <section>
      <article>
        <header>
          <h1>{count}</h1>
          <button onClick={()=>setCount(count+1)}>Increment</button>
        </header>
      <main>
          <ChildComponent
            username="" company="TYSS" salary={10000} array={ array} />
      </main>
      </article>
    </section>
  )
}

export default App
