import React from 'react'
import { useState } from 'react'
import Child from './Child'

const Parent = () => {
  let [state,setState]=useState("")
  return (
    <div>
      <Child data={setState}/>
      <p>Content viewed from Child Component o/p:{state}</p>
    </div>
  )
}

export default Parent
