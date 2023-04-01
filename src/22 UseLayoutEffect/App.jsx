// ! useLayoutEffect

import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react';

const App = () => {
    let[state,setState]=useState("")
    useEffect(()=> {
        console.log("i am use effect and i am Asynchronous")
        let data="gagan"//after render
        setState(data)
    }, [])
    useLayoutEffect(() => {
        console.log("i am uselayoutEffect and i am synchronous");
        let data = "Shashi" //before render
        setState(data)
    },[])
  return (
    <div>
      <h1>i am Maadhu and trainer  {state} </h1>
    </div>
  )
}

export default App
