// ! Class based component

// import React, { Component,PureComponent } from 'react'

// export default class ChildComponent extends PureComponent {
    
//     render() {
//       console.log("i am PureComponent");
//     return (
//       <div>ChildComponent</div>
//     )
//   }
// }


// ==========================

import React from 'react'

const ChildComponent = () => {
  console.log("i am child component please check how many times i'll printed");
  return (
    <div>
      <ChildComponent/>
    </div>
  )
}

export default React.memo(ChildComponent); 
