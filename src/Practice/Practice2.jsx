import React, { Component } from 'react'

export default class Practice2 extends Component {
constructor(props){
  
  console.log(props)
}

  render() {
    return (
      <div>
      {console.log(this.props.x)}
      </div>
    )
  }
}
