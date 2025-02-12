import React from 'react'

export default function TestF() {
    let name = "Anushka Sharma"
    let arr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    let emp = [
        { id: 101, name: "Hritik kr singh", dsg: "student" },
        { id: 102, name: "Anushka Sharma", dsg: "MBA" },
        { id: 103, name: "Prince kr singh", dsg: "student" },
        { id: 104, name: "Amit yadav", dsg: "student" },
        { id: 105, name: "Vineet kumar ", dsg: "student" }
    ]
    return (
        <>
            <h1>Functional component example to display variables</h1>
            <h2>Name : {name}</h2>
            <h2>Array : {arr.join()}</h2>
            <table border={2} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Designation</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map((item, index) => {
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
