import React from 'react'
import ChildF from './ChildF'

export default function ParentF() {
  
    let emp= [
      { id: 101, name: "Hritik kr singh", dsg: "student" },
      { id: 102, name: "Prince kr singh", dsg: "student" },
      { id: 103, name: "Amit yadav", dsg: "student" },
      { id: 104, name: "Vineet kumar ", dsg: "student" }

  ]
  
  
    return (
        <>
        <h1>Fuctional component to send data from parent to child component</h1>
        <h2>this is parent component</h2>
        <hr/>

        {/* props = properties */ }
        <ChildF id = {105} name ="Anushka Sharma" dsg="student" data={emp} />  
         
        </>
    )
  
}
