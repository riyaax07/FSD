import React, { useEffect, useState } from 'react'

const Counter = () => {
    //let count =0;
    const [count,setcount]=useState(0)
    const [message,setmessage]=useState("");
    useEffect(()=>{
        setmessage(`updated count = ${count}`)
    },[count])
    function increment(){
        setcount(count+1)
        console.log("count",count);
    }
    const decrement =()=>{
        setcount(count-1)
        console.log("count",count);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <div className="counter">
      <button className="btn" onClick={increment}>+</button>
      <div className='count'>{count}</div>
      <button className="btn" onClick={decrement}>-</button>
      </div>
      <h1>{message}</h1>
    </div>
  )
}

export default Counter
