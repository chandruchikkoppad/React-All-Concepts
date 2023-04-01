import React from 'react'
import ContextApi from '../ContextApi'
import Login from './Login'
import Logout from './Logout'

const Auth = () => {
  return (
    <div>
      <ContextApi>
      <Login/>
      <Logout/>
      </ContextApi>
    </div>
  )
}

export default Auth