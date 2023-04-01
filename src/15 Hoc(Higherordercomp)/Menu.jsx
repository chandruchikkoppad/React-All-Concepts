import React from 'react'
import Hoc from './Hoc'
const Menu = (props) => {
  return (
      <div>{props.state.userName} {props.state.Age}</div>
  )
}

export default Hoc(Menu)