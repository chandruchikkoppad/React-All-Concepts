// ! useparams is use to fetch the component using dynamic URL

// !The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>

import React from 'react'
import { useParams } from 'react-router-dom';

const Users = () => {
    let val = useParams()
    console.log(val);
  return (
      <h1>My Name is <strong style={{color:"red"}}>{val.name}</strong></h1>
  )
}
export default Users