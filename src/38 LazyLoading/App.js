import React from 'react'
import { lazy } from 'react'
import { Suspense } from 'react'
import Component1 from './Component1'

export let Component2=lazy(()=>import("./Component2"))

const App = () => {
  return (
    <div>
      <Component1/>
      <Suspense fallback={<h1>Please wait and after display go to network</h1>}><Component2/></Suspense>
    </div>
  )
}

export default App
