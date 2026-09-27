import React from 'react'
import "./Counter.css"
const Counter = () => {
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    console.log("Decrementing count:", count-1)
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={decrement} className="btn">-</button>
      <span>{count}</span>
      <button onClick={increment} className="btn">+</button>
    </div>
  )
}

export default Counter
