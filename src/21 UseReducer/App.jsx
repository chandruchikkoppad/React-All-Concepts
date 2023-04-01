// ! Count using the useReducer

// import React, { useReducer } from 'react'

// let reducer=(state,action) => {
//     switch (action.type) {
//       case "Maadhu":
//         return { count: state.count + 1000 };
//       case "increment":
//         return { count: state.count + 1 };
//       case "decrement":
//         return { count: state.count - 1 };
//       case "reset":
//         return { count:0 };
//     //   default:return null
//         default: return new error ("error")
//     }
// }
// let intialState = {
//     count:0,
// }
// const App = () => {
//     let [state, dispatch] = useReducer(reducer, intialState);
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "Maadhu" })}>Maadhu</button>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }

// export default App

// ==============================================
// !CONTROLLED COMPONENT USING useReducer

// import React,{useReducer} from 'react'

// let reducer = (state,action) => {
//     switch (action.type) {
//         case "email":
//             return {...state,email:action.payload}
//         case "password":
//             return {...state,password:action.payload}
    
//         default: return null
//     }
    
// }

// let initialState = {
//     email: "",
//     password:""
// }

// const App = () => {
//     let [state, dispatch] = useReducer(reducer, initialState)
//     let handleSubmit = e => {
//         e.preventDefault()
//         try {
//             console.log(state)
//         } catch (error) {
//             console.log(error)
//         }
//  }
//   return (
//     <section>
//       <article>
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">User Email :</label>
//             <input
//               type="text"
//               placeholder="enter email"
//               name="email"
//               id="email"
//               value={state.email}
//               onChange={e => dispatch({ type: "email",payload:e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">User Password :</label>
//             <input
//               type="password"
//               placeholder="enter password"
//               name="password"
//               id="password"
//               value={state.password}
//               onChange={e =>
//                 dispatch({ type: "password",payload:e.target.value })
//               }
//             />
//           </div>
//           <div className="form-group">
//             <button>Submit</button>
//           </div>
//         </form>
//       </article>
//     </section>
//   );
// }

// export default App


// ==================================
// ! Recommended insted of using multiple switch case use  name and value attribute
import React, { useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
      case "textValue":
          //! here payload is holding the value
          return { ...state, [action.payload.name]: action.payload.value };

    default:
      return null;
  }
};

let initialState = {
  email: "",
  password: "",
};

const App = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let handleSubmit = e => {
    e.preventDefault();
    try {
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <article>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">User Email :</label>
            <input
              type="text"
              placeholder="enter email"
              name="email" //! name attribute is important without 
              id="email"
              value={state.email}
              onChange={e =>
                dispatch({
                  type: "textValue",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">User Password :</label>
            <input
              type="password"
              placeholder="enter password"
              name="password"
              id="password"
              value={state.password}
              onChange={e =>
                dispatch({
                  type: "textValue",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default App;
