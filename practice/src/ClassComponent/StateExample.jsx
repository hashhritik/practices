import React, { Component } from 'react'

export default class StateExample extends Component {
    constructor() {
        super()
        // this.num = 1
        this.state = {
            num: 1
        }
    }

    decrement() {
        // this.num--
        // console.log(this.num);
        if (this.state.num > 1)
            this.setState({ num: this.state.num - 1 })

    }

    increment() {
        // this.num++
        // console.log(this.num);

        this.setState({ num: this.state.num + 1 })

    }
    render() {
        return (
            <>
                <h1>class component StateExample</h1>
                {/* <h2>num = {this.num}</h2> */}
                <h2>num = {this.state.num}</h2>
                <button onClick={() => this.decrement()}>Decrement</button>
                <button onClick={() => this.increment()}>Increment</button>

            </>
        )
    }
}
