import React from 'react'
import Logo from './Logo';
import Menu from './Menu';

const Header = (props) => {
  return (
      <div>
          <Logo />
          <Menu username={ props.username} />
    </div>
  )
}

export default Header