// ! Form Submission using class based component

// import React, { Component } from 'react'

// export default class App14a extends Component {
//   usernameRef = React.createRef();
//   userPassword = React.createRef();
//   handleSubmit = (e) => {
//     e.preventDefault()
//     let username = this.usernameRef.current.value;
//     let password = this.userPassword.current.value;
//     console.log(username,password)
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <input type="text" placeholder="Enter username" ref={username} />
//           <input type="password" placeholder="Enter password" ref={password}/>
//           <button onClick={this.handleSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }


// =================================
// !Form submission using function based component

import React,{useRef} from 'react'

const App14a = () => {
  let useremail = useRef()
  let phonenumber = useRef()
  let password = useRef()
  
 let handleSubmit = (e) => {
    e.preventDefault();
    let email = useremail.current.value;
   let phnum = phonenumber.current.value;
   let pass = password.current.value
   console.log(email,phnum,pass);
  }

  return (
    <section>
      <article>
        <form>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              placeholder="Enter email"
              id="email"
              ref={useremail}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone number</label> <br />
            <input
              type="phone"
              placeholder="Enter your number"
              id="phone"
              ref={phonenumber}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label> <br />
            <input type="password" placeholder="Enter your password" ref={password}/>
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default App14a