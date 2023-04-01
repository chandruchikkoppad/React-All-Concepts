import React, { Component } from 'react'

export default class Boundries extends Component {
  constructor(props){
    super(props)
    this.state={hasError:false}
  }
  static getDerivedStatefromError(error){
    return {hasError:true}
  }
  // componentDidCatch(error,errorInfo){
  //   logErrorToMyService(error,errorInfo)
  // }
  render() {
  if(this.state.hasError){
    return <h1>something went wrong</h1>
   }
   return this.props.children
  }
}
