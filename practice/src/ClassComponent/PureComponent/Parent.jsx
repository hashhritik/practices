import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    constructor() {
        super()
        this.state = {
            num: 1
        }
    }
    render() {
        console.log("Parent Component is Rendered");
        return (
            <>
                <h1>PureComponent vs ShouldComponent Update Example</h1>
                <h2>This is Parent Component</h2>
                <h3>num ={this.state.num}</h3>
                <button onClick={() => this.setState({ num: this.state.num + 1 })}>Increment num1</button>
                <hr />
                <Child />

            </>
        )
    }
}
