import React, { useState } from 'react'

export default function StateExampleF() {
  let [num, setNum] = useState(1)

  return (
    <>
      <h1>Functional component StateExample</h1>
      <h2>num = {num}</h2>
      <button onClick={() => num > 1 ? setNum(num - 1) : ""}>Decrement</button>
      <button onClick={() => setNum(num + 1)}>Increment</button>
    </>
  )
}

/////////////////////////////////////////////////////////////

// import React, { useState } from 'react'
// export default function StateExampleF() {
//     let [num,setNum]= useState(1)
//     function decrement() {
//       if(num>1)
//         setNum(num-1)
//         // console.log(num);
//     }
//
//     function increment() {
//         setNum(num+1)
//         // console.log(num);
//     }
//   return (
//     <>
//     <h1>Functional component StateExample</h1>
//     <h2>num = {num}</h2>


//     <button onClick={()=>decrement()}>Decrement</button>
//     <button onClick={()=>increment()}>Increment</button>
//                          or
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={increment}>Increment</button>
//     </>
//   )
// }
