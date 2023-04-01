import React from 'react'
import Logo from './Logo'
import Menu from './Menu';

const Nav = () => {
  return (
    <div style={{display:"flex",width:"100%",justifyContent:"space-between"}} className="navBlock">
      <Logo/>
      <Menu/>
    </div>
  )
}

export default Nav
