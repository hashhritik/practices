import React, { Component } from 'react'

export default class Test extends Component {

    constructor() {
        super()
        this.name = "hritik"
        this.arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        this.emp = [
            { id: 101, name: "Hritik kr singh", dsg: "student" },
            { id: 102, name: "Prince kr singh", dsg: "student" },
            { id: 103, name: "Amit yadav", dsg: "student" },
            { id: 104, name: "Vineet kumar ", dsg: "student" }

        ]
    }
    render() {
        return (

            <>
                <h1>class component example to display variable</h1>
                <h2> Name : {this.name}</h2>
                <h2>Array : {this.arr.join()}</h2>
                <table border={2} cellPadding={5}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>                                this is not dynamic , and if we have to print multiple date we have this this code again and again and will not work in dyamic data
                            <td>{this.emp[0].id}</td>
                            <td>{this.emp[0].name}</td>
                            <td>{this.emp[0].dsg}</td>

                        </tr> */}

                        {

                            this.emp.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.dsg}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}