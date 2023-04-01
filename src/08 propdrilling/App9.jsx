import React, { Component } from 'react'

import Header from './Header';
export default class App9 extends Component {
    state = {
        username:"Shashi"
    }
  render() {
    return (
        <div>
            <Header username={this.state.username} />
      </div>
    )
  }
}
