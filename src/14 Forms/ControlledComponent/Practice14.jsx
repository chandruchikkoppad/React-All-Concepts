// import React, { Component } from "react";

// export default class practice extends Component {
//   state = {
//     email: "",
//     password: "",
//   };
//     handleChange = e => {
//       this.setState({[e.target.name]:e.target.value})
//     };
//     handleSubmit = e => {
//         e.preventDefault();
//         let { email, password } = this.state;
//         console.log(email,password);
//     }
//   render() {
//     return (
//       <section>
//         <article>
//           <form onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" value={this.state.email} name="email" onChange={this.handleChange} />
//             </div>
//             <div class="form-group">
//               <label htmlfor="password">password</label>
//               <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
//             </div>
//             <div className="form-group">
//               <button>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     );
//   }
// }


// =================================
// import React,{useState} from 'react'

// const Practice14 = () => {
//   let [state, setState] = useState({
//     email: "",
//     password:" "
//   })
//   return (
//     <div></div>
//   )
// }

// export default Practice14

