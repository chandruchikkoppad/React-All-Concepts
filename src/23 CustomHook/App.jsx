import React from 'react'
import useFetch from './useFetch'

const App = () => {
    // let state = useFetch("https://api.github.com/users")
    let value = useFetch("https://dummyjson.com/products ")
    // console.log(state)
    console.log(value);
  return (
    <div>
      {/* {value} */}
          {value.products.length > 0 && value.products?.map(user => <h1>{ user.title}</h1>)}
    </div>
  )
}

export default App

