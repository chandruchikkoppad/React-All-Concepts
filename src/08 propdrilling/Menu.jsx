import React from 'react'
import List from './List';

const Menu = (props) => {
  return (
      <div>
          <List username={props.username} />
    </div>
  )
}

export default Menu