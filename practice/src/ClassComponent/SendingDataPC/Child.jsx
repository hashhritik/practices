import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <>
        <h2>this is child component</h2>
        <h3>Id : {this.props.id}</h3>
        <h3>Name : {this.props.name}</h3>
        <h3>Designation : {this.props.dsg}</h3>

        <table border={2} cellPadding={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>

            </tr>
          </thead>

          <tbody>
            {/* <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Designation</td>

            </tr> */}

            {
              this.props.data.map((item, index) => {
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
