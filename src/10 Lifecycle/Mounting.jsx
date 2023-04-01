import React, { Component, Fragment } from "react";

export default class Mounting extends Component {
    constructor() {
      console.log("i am constructor method")
    super();
    this.state = {
      users: [],
    };
  }
    componentDidMount() {
        console.log("i am componentDidMount")
    fetch("https://api.github.com/users")
      .then(x => x.json())
      .then(info => {
        // console.log(info);
        this.setState({ users: info });
      })
      .catch(error => {
        console.log(error);
      });
  }
    render() {
        console.log("i am render method")
    return (
      <div>
        {this.state.users.map(m => {
        //   console.log(m);
            return <Fragment key={m.id}><button>{m.id}</button>
                <img src={m.avatar_url} alt="" />
                <h1>{m.login }</h1>
            </Fragment>;
        })}
      </div>
    );
  }
}
