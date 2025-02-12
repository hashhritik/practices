import React, { PureComponent } from 'react'

export default class Child extends PureComponent {
    
    render() {
        console.log("Child Component is Rendered");
        return (
            <>
                <h2> this is child component</h2>
            </>
        )
    }
}



////////////////////////////////////////////////////


// import React, { Component } from 'react'

// export default class Child extends Component {
//     shouldComponentUpdate(){return false }
//     render() {
//         console.log("Child Component is Rendered");
//         return (
//             <>
//                 <h2> this is child component</h2>
//             </>
//         )
//     }
// }
