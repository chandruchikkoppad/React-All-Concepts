// import React from 'react'
// import { useState } from 'react';
// import { createContext } from 'react'


// export let Provide=createContext();
// const ContextApi = ({children}) => {
//   let[state,setState]=useState("Anil")
//   return (
//     <Provide.Provider value={{state}}>{children}</Provide.Provider>
//   )
// }
// export default ContextApi

// ============================================
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export let Provide=createContext()
const ContextApi = ({children}) => {
  let [state,setState]=useState("xyz")
  return (
    <Provide.Provider value={{state}}>
      {children}
    </Provide.Provider>
  )
}
export default ContextApi
