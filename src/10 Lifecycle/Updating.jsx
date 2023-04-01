import React, { Component } from 'react'

export default class Updating extends Component {
    state = {
        count: 0
    };

    onClicking = () => {
        this.setState({ count: this.state.count + 1 });
    }
    componentDidMount() {
        console.log("i am componentDIdMount");
    }
    shouldComponentUpdate() {
        console.log("i am shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(preProps,preState) {
        console.log("getSnapshotBeforeUpdate,preState");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
        document.title = this.state.count;
    }
  render() {
    return (
        <div><h1>{this.state.count}</h1>
        <button onClick={this.onClicking}>increment</button></div>
        
    )
  }
}
