import React, { Children } from 'react'
import { createContext, useState } from 'react';
export let CounterContext = createContext()
const CounterContext = () => {
    let [count, setCount] = useState(0);
    let Increment = () => {
        setCount(count+1)
    }
    let Decrement = () => {
        setCount(count-1)
    }
    let Reset = () => {
        setCount(0)
    }
  return (
      <CounterContext.Provider value={{count,Increment,Decrement,Reset}}>
          {Children}
    </CounterContext.Provider>
  )
}

export default CounterContext
