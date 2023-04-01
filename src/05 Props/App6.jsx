// !Function baesd component props
// import React from 'react'
// import Childcomponent from './Childcomponent'

// const Props =()=> {
//   return (
//     <div>
//       <Childcomponent state="Shashi"/>
//     </div>
//   )
// }
// export default Props

// =================================
// !Class based component props

// import React, { Component } from "react";
// import Childcomponent from "./Childcomponent";

// export default class Props extends Component {
//   render() {
//     return (
//       <div>
//         <Childcomponent username="Madappa" password={1234} />
//       </div>
//     );
//   }
// }

// ======================================
// !Sending object data using class component

// import React, { Component } from 'react'
// import Childcomponent from './Childcomponent'

// export default class Props extends Component {
//   render() {
//     return (
//       <div>
//         <Childcomponent mernStack={{
//           frontend: ["html", "css", "javascript", "reactjs", "angular"],
//           backend: ["node js", "express js", "socket js", "nest js"],
//         database:["mongodb","msql","sql"]}} />
//       </div>
//     )
//   }
// }

// =================================
// !Sending array of data

// import React, { Component } from 'react'
// import Childcomponent from './Childcomponent'

// export default class Props extends Component {
//   render() {
//     return (
//       <div>
//         <Childcomponent language={ ["JavaScript","Java","Python","php"]} />
//       </div>
//     )
//   }
// }

// ========================
// !sending data as a Boolean

// import React, { Component } from 'react'
// import Childcomponent from './Childcomponent';

// export default class Props extends Component {
//   render() {
//     return (
//       <div><Childcomponent isAvailable={false} /></div>
//     )
//   }
// }

// ===============================
// !Sending both Null & Json object and checking the condition

// import React, { Component } from 'react'
// import Childcomponent from './Childcomponent';
// import Product from "./product.json"

// export default class Props extends Component {
//   render() {
//     return (
//       <div><Childcomponent isAvailable={""} products={Product} /></div>
//     )
//   }
// }

// ===================
// !Sending state value as a props
 // ? without using "useState" befre 16.8v

// import React, { Component } from 'react'
// import Childcomponent from './Childcomponent'

// export default class Props extends Component {
//   state = {
//     users: ["shahsi","Harsih","Gagan","Dixith"]
//   }
//   render() {
//     return (
//       <div>
      
//         <Childcomponent state={ this.state} />
//       </div>
//     )
//   }
// }


// !Sending function and state to child

import React, { Component } from 'react'
import Childcomponent from './Childcomponent';

export default class Props extends Component {
  state = {
    count: 0,
  };
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  Reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <Childcomponent
          sendcount={this.state.count}
          increment={this.Increment}
          decrement={this.Decrement}
          reset={this.Reset}
        />
      </div>
    );
  }
}


