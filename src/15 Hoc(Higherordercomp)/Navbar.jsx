import React from 'react'
import Hoc from './Hoc'
import Menu from './Menu';
const Navbar = (props) => {
  return (
    <div><Menu/></div>
  )
}

export default Hoc(Navbar)