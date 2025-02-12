import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  constructor(){
    super()
    this.emp= [
      { id: 101, name: "Hritik kr singh", dsg: "student" },
      { id: 102, name: "Prince kr singh", dsg: "student" },
      { id: 103, name: "Amit yadav", dsg: "student" },
      { id: 104, name: "Vineet kumar ", dsg: "student" }

  ]
  }
  render() {
    return (
        <>
        <h1>class component to send data from parent to child component</h1>
        <h2>this is parent component</h2>
        <hr/>

        {/* props = properties */ }
        <Child id = {105} name ="Anushka Sharma" dsg="student" data={this.emp} />  
         
        </>
    )
  }
}
