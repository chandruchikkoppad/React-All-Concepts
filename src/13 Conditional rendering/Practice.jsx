import React, { Component } from 'react'

export default class practice extends Component {
    state = {
        isAutheticated: false
    };
    
    render() {
        if (this.state.isAutheticated) {
            return (
                <div>
                    <h1>Welcome to TestYantra</h1>
                    <p>Hello </p>
                    <button>Logout</button>
              </div>
          )
        }
        else {
            return (
              <div>
                <button>Signup</button>
                <button>Login</button>
              </div>
            );
        }
    
  }
}
