import React from 'react'
import Product from './Product'

const Products = (props) => {
  console.log(props.products)
  return (
      <div>
          <h1>List of PRODUCTS</h1>
          <Product  value={ props.products} />
          {/* {
              props.products.map((val, index) => {
                  return <Product key={index + 1} value={val} />
              })
          } */}
    </div>
  )
}

export default Products