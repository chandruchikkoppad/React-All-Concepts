import React, { Component } from 'react'
import Practice2 from './Practice2'

export default class Practice extends Component {
  state="hello"
  render() {
    return (
      <div>
        <Practice2 x={this.state}/>
      </div>
    )
  }
}
