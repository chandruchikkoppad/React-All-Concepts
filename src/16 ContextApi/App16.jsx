import React from 'react'
import Navbar from './Navbar';
import JioProvider from './JioContext';
import Login from './Login';
const App16 = () => {
  return (
      <section>
          <JioProvider>
              <Navbar/>
              <Login/>
              </JioProvider>
    </section>
  )
}

export default App16