import React from 'react'

var name2 = "Hritik"
var arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
var emp2 = {
    id:101,
    name:"hritik",
    dsg:"student",
    city:"varanasi"

}

function display2(){

    return <h3>In Display of ModuleExampleF component</h3> 
}

function ModuleExampleF () {
    
        return (
            <>
            <h1>Functional component Module Example</h1>
            </>
        )
    
}

export default ModuleExampleF        //default export
export { name2, arr2, emp2, display2 }     //name export