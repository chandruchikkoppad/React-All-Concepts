import React from 'react'
import { useState } from 'react'

const Child = ({data}) => {
  let [val,setVal]=useState("")
  let transfer=()=>{
data(val)
  }

  return (
    <div>
      <input type="text" onChange={(e)=>setVal(e.target.value)} />
      <button onClick={transfer}>Click to transfer the data</button>
    </div>
  )
}

export default Child
