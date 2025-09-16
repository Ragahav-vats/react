import React, { useState } from 'react'

export default function counter() {

  var [count, setCount] = useState(1);
  const minus = () =>{
    count--;
    setCount(count);
    // console.log(count);
  }
  const plus = () =>{
    count++;
    setCount(count);
    // console.log(count);
  }

  
  return (
    <>

      <div className="counter">
         <button onClick={minus}>-</button>
         <button>{count}</button>
         <button onClick={plus}>+</button>
        </div>

    </>

      

      
    
  )
}
