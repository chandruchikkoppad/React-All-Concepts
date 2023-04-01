// import React, { Component } from "react";

// export default class App14b extends Component {
//   state = {
//     email: "",
//     phone: "",
//     password: "",
//     };
//    handleSubmit = () => {
//         let email = this.state.email;
//         let phone = this.state.phone;
//         let password = this.state.password
//         console.log(email,phone,password)
//     }
//   render() {
//     return (
//       <section>
//         <article>
//           <form onSubmit={this.handleSubmit}>
//             <div>
//               <label htmlFor="email">Email</label> <br />
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 id="email"
//                 value={this.state.email}
//                 onChange={e => this.setState({ email: e.target.value })}
//               />
//             </div>
//             <div>
//               <label htmlFor="phone">Phone number</label> <br />
//               <input
//                             type="phone"
//                             placeholder="Enter your number"
//                             id="phone"
//                             value={this.state.phone}
//                             onChange={e =>this.setState({phone:e.target.value})}
//               />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label> <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                             value={this.state.password}
//                             onChange={e=>this.setState({password:e.target.value})}
//               />
//             </div>
//             <div>
//               <button>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     );
//   }
// }

// ====================================
// !Controlled component using class based component i.e: compare value & name

// import React, { Component } from 'react'

// export default class App14b extends Component {
//      state = {
//         email: "",
//         phone: "",
//         password:"",
//     }
//     handleChange = e => {
//         // console.log(e)
//         this.setState({[e.target.name]:e.target.value})
//     }
//     handleSubmit = e => {
//         e.preventDefault();
//         let { email, password, phone } = this.state;
//         console.log(email,password,phone);
//     }
//   render() {
//     return (
//       <section>
//         <article>
//           <form onSubmit={this.handleSubmit}>
//             <div className="from-group">
//               <label htmlFor="email">Email</label> <br />
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 id="email"
//                 value={this.state.email}
//                 name="email"
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div className="from-group">
//               <label htmlFor="phone">Phone number</label> <br />
//               <input
//                 type="phone"
//                 placeholder="Enter your number"
//                 id="phone"
//                 value={this.state.phone}
//                 name="phone"
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div className="from-group">
//               <label htmlFor="password">Password</label> <br />
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={this.state.password}
//                 name="password"
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div>
//               <button>Submit</button>
//             </div>
//           </form>
//         </article>
//       </section>
//     );
//   }
// }

// ! Functional based component

// import React,{useState} from 'react'

// const App14b = () => {
//     let [state, setState] = useState({
//         email: "",
//         phone: "",
//         password:"",
//     })
//     let { email, phone, password } = state //!destructuring
//     // ! here spread operator is important i.e: ...state
//     let handleChange = e => {
//         setState({...state,[e.target.name]:e.target.value})
//     }
//     let handleSubmit = e => {
//         e.preventDefault();
//         console.log(email,phone,password);
//     }
//   return (
//     <section>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div className="from-group">
//             <label htmlFor="email">Email</label> <br />
//             <input
//               type="email"
//               placeholder="Enter email"
//               id="email"
//               value={email} //!value={state.email} if destructuring not done we should write like this
//               name="email"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="from-group">
//             <label htmlFor="phone">Phone number</label> <br />
//             <input
//               type="phone"
//               placeholder="Enter your number"
//               id="phone"
//               value={phone} //!value={state.phone} if destructuring not done we should write like this
//               name="phone"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="from-group">
//             <label htmlFor="password">Password</label> <br />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               id="password"
//               value={password} //!value={state.password} if destructuring not done we should write like this
//               name="password"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// }

// export default App14b

// ===================================================
// !Functional based component
// ! Controlled component using inline onChange

// import React,{useState} from 'react'

// const App14b = () => {
//     let [email, setEmail] = useState("");
//     let [phone, setphone] = useState("");
//     let [password, setpassword] = useState("");
//     let handleSubmit = e => {
//         e.preventDefault();
//         console.log(email,phone,password)
//     }
//   return (
//     <section>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div className="from-group">
//             <label htmlFor="email">Email</label> <br />
//             <input
//               type="email"
//               placeholder="Enter email"
//               id="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="from-group">
//             <label htmlFor="phone">Phone number</label> <br />
//             <input
//               type="phone"
//               placeholder="Enter your number"
//               id="phone"
//               value={phone}
//               onChange={e => setphone(e.target.value)}
//             />
//           </div>
//           <div className="from-group">
//             <label htmlFor="password">Password</label> <br />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={e => setpassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// }

// export default App14b

// ========================
// ! Example for select options

// import React,{useState} from "react";

// const App14b = () => {
//     let [email, setEmail] = useState("");
//     let [Language, setLanguage] = useState("");
//     let handleSubmit = e => {
//         e.preventDefault()
//         console.log(email,Language);
// }

//   return (
//     <section>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div className="from-group">
//             <label htmlFor="email">Email</label> <br />
//             <input
//               type="email"
//               placeholder="Enter email"
//               id="email"
//                           value={email}
//                           onChange={e=>setEmail(e.target.value)}
//             />
//                   </div>
//                   <div className="form-group">
//                       <label htmlFor="languages">Languages</label>
//                       <select value={Language} >
//                           <option value="java">java</option>
//                           <option value="js">js</option>
//                           <option value="python">python</option>
//                           <option value="php">php</option>
//                     </select>
//                   </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// };

// export default App14b;

// ! Change the event in  access the radio data

// import React, { useState } from "react";

// const App14b = () => {
//   let [email, setEmail] = useState("");
//   let [Language, setLanguage] = useState("");
//   let [Gender, setGender] = useState("");
//   let handleSubmit = e => {
//     e.preventDefault();
//     console.log(email, Language, Gender);
//   };
//   return (
//     <section>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div className="from-group">
//             <label htmlFor="email">Email</label> <br />
//             <input
//               type="email"
//               placeholder="Enter email"
//               id="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="languages">Languages</label>
//             <select value={Language} onChange={e => setLanguage(e.target.value)}>
//               <option value="java">java</option>
//               <option value="js">js</option>
//               <option value="python">python</option>
//               <option value="php">php</option>
//             </select>
//           </div>
//           <div
//             className="form-group"
//             value={Gender}
//             onChange={e => setGender(e.target.value)}
//           >
//             <label htmlFor="gender">Gender</label>
//             <input type="radio" value="male" name="gender" /> Male
//             <input type="radio" value="female" name="gender" />
//             Female
//             <input type="radio" value="other" name="gender" />
//             Others
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// };

// export default App14b;

// ===============================
// ! To change access the file

// import React, { useState } from "react";

// const App14b = () => {
//   let [email, setEmail] = useState("");
//   let [Language, setLanguage] = useState("");
//     let [Gender, setGender] = useState("");
//     let [Photo, setphoto] = useState("");
//   let handleSubmit = e => {
//     e.preventDefault();
//     console.log(email, Language, Gender,Photo);
//   };
//   return (
//     <section>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div className="from-group">
//             <label htmlFor="email">Email</label> <br />
//             <input
//               type="email"
//               placeholder="Enter email"
//               id="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="languages">Languages</label>
//             <select
//               value={Language}
//               onChange={e => setLanguage(e.target.value)}
//             >
//               <option value="java">java</option>
//               <option value="js">js</option>
//               <option value="python">python</option>
//               <option value="php">php</option>
//             </select>
//           </div>
//           <div
//             className="form-group"
//             value={Gender}
//             onChange={e => setGender(e.target.value)}
//           >
//             <label htmlFor="gender">Gender</label>
//             <input type="radio" value="male" name="gender" /> Male
//             <input type="radio" value="female" name="gender" />
//             Female
//             <input type="radio" value="other" name="gender" />
//             Others
//                   </div>

//              <div className="form-group">
//                       <label htmlFor="photo">Choose the photo</label>
//                       <input type="file" onChange={e=>setphoto(e.target.files[0])} />
//                   </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// };

// export default App14b;

// ! To access the textarea

// import React, { useState } from "react";

// const App14b = () => {
//   let [email, setEmail] = useState("");
//   let [Language, setLanguage] = useState("");
//   let [Gender, setGender] = useState("");
//     let [Photo, setphoto] = useState("");
//     let [desc, setdescription] = useState("");
//   let handleSubmit = e => {
//     e.preventDefault();
//     console.log(email, Language, Gender, Photo,desc);
//   };
//   return (
//     <section>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div className="from-group">
//             <label htmlFor="email">Email</label> <br />
//             <input
//               type="email"
//               placeholder="Enter email"
//               id="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="languages">Languages</label>
//             <select
//               value={Language}
//               onChange={e => setLanguage(e.target.value)}
//             >
//               <option value="java">java</option>
//               <option value="js">js</option>
//               <option value="python">python</option>
//               <option value="php">php</option>
//             </select>
//           </div>
//           <div
//             className="form-group"
//             value={Gender}
//             onChange={e => setGender(e.target.value)}
//           >
//             <label htmlFor="gender">Gender</label>
//             <input type="radio" value="male" name="gender" /> Male
//             <input type="radio" value="female" name="gender" />
//             Female
//             <input type="radio" value="other" name="gender" />
//             Others
//           </div>

//           <div className="form-group">
//             <label htmlFor="photo">Choose the photo</label>
//             <input type="file" onChange={e => setphoto(e.target.files[0])} />
//           </div>

//            <div className="form-group"> <label htmlFor="desc">Description</label>
//                   <textarea value={desc} onChange={e=>setdescription(e.target.value)} cols="30" rows="10"></textarea></div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// };

// export default App14b;

// ! accessing input price

// import React, { useState } from "react";

// const App14b = () => {
//      let [desc, setdescription] = useState("");
//     let [price, setprice] = useState("");
//   let handleSubmit = e => {
//     e.preventDefault();
//     console.log(price);
//   };
//   return (
//     <section>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="desc">Description</label>
//             <textarea
//               value={desc}
//               onChange={e => setdescription(e.target.value)}
//               cols="30"
//               rows="10"
//             ></textarea>
//           </div>
//                   <div className="form-group"><label htmlFor="price">Price Range</label>
//                   <input type="range" value={price} min={0} max={100} onChange={e=>setprice(e.target.value)} /></div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// };

// export default App14b;

// ============================
// ! input type is dob

// import React, { useState } from "react";

// const App14b = () => {

//     let [price, setprice] = useState("");
//     let [Dob, setDob] = useState("");
//   let handleSubmit = e => {
//     e.preventDefault();
//     console.log(Dob);
//   };
//   return (
//     <section>
//       <article>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="price">Price Range</label>
//             <input
//               type="range"
//               value={price}
//               min={0}
//               max={100}
//               onChange={e => setprice(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">DOB</label>
//             <input
//               type="date"
//               value={Dob}

//               onChange={e => setDob(e.target.value)}
//             />
//           </div>
//           <div>
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// };

// export default App14b;

// ==============================================
// !  Accesing the Checkbox using functional based component

import React, { useState } from "react";

const App14b = () => {
  let [price, setprice] = useState("");
  let [skills, setskill] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(price, skills);
  };

  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="price">Price Range</label>
            <input
              type="range"
              value={price}
              min={0}
              max={100}
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <div
            className="form-group"
            onChange={(e) => setskill([...skills, e.target.value])}
            value={skills}
          >
            <label htmlFor="skills">Skills</label>
            <input type="checkbox" name="skills" id="skills" value="js" />
            js
            <input type="checkbox" name="skills" id="skills" value="java" />
            java
            <input type="checkbox" name="skills" id="skill" value="Nodejs" />
            Nodejs
            <input type="checkbox" name="skills" id="skill" value="Expressjs" />
            Expressjs
            <input type="checkbox" name="skills" id="skill" value="php" />
            php
            <input type="checkbox" name="skills" id="skill" value="python" />
            python
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default App14b;
