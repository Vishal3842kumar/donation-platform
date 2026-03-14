import React, { useState } from 'react'

const Count = () => {
  let [count, setCount] = useState(0);
    function handelAdd() {
      setCount(count++);
    }
    function handelSub() {
      setCount(count--);
    }
  return (
    <>
    <div>
      <button onClick={handelAdd}>+</button>
    </div>
    <div>{count}</div>
    <div>
      <button onClick={handelSub}>-</button>
    </div>
    </>
  )
}

export default Count