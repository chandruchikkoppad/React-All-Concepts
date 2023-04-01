import React from 'react'

const Product = ({value}) => {
    
  console.log(value)
  return (
    <div>
      <figure>
        <img src={avatar_url} alt="" />
        <h1>{id}</h1>
        <p>{url}</p>
       <p>{node_id}</p>
      </figure>
    </div>
  );
}

export default Product