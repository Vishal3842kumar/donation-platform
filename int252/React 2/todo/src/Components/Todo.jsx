import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState();
    function handleInput() {
        
    }

  return (
    <div className='flext justify-center '>
        <div className='p-5 text-center space-x-5'>
            <input className='border p-3 text-4xl' type='text' onChange={(e)=>{setInput(e.target.value)}}/>

        </div>
        <div>
            <button className='text-white p-3 text-3xl border rounded bg-blue-900' onClick={handleInput}>Add Todo</button>
        </div>
        <div>{input}</div>
        <div><button></button></div>
    </div>
  )
}

export default Todo