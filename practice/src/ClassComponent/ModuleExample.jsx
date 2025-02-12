import React, { Component } from 'react'

var name1 = "Hritik"
var arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
var emp1 = {
    id:101,
    name:"hritik",
    dsg:"student",
    city:"varanasi"

}

function display1(){

    return <h3>In Display of ModuleExample component</h3> 
}

class ModuleExample extends Component {
    render() {
        return (
            <>
            <h1>Class component Module Example</h1>
            </>
        )
    }
}

export default ModuleExample        //default export
export { name1, arr1, emp1, display1 }     //name export