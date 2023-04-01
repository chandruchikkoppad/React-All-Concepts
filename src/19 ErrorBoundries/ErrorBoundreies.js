import React, { Component } from 'react'

export default class ErrorBoundreies extends Component {
    constructor() {
        super()
        this.state = {
            hasError:true,
        }
    }
    static getDerivedStateFromError(Error) {
        return {
            hasError: true,
        }
    }
    // componentDidCatch(error, errorInfo) {
    //     //you can also log the error to an error reporting service
    //     console.log(error,errorInfo)
    // }
  render() {
 
          if(this.state.hasError){
          return <h1 style={{color:"orange"}}>Some thing went wrong</h1>
      }
          else {
              return <>{ this.props.children}</>
      }
    }

    
  }

