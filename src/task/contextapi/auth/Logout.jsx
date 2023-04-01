import React from 'react'
import { useContext } from 'react'
import { Provide } from './../ContextApi';

const Logout = () => {
  let data=useContext(Provide)
  console.log(data)
  return (
    <div>
      {data.state}
    </div>
  )
}
export default Logout