import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("good afternoon")
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter