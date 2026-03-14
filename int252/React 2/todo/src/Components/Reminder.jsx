import React, { useRef, useState } from 'react'

const Reminder = () => {
    let inputData=useRef();
    let [data, setData]= useState([]);
    function handleClick() {
        setData([inputData.current.value,...data]);
        inputData.current.value="";
    }
  return (
    <div>
        <div className='space-x-3 text-center'>
            <input type="text" ref={inputData} placeholder='Enter Text' className='border bg-amber-100 rounded'/>
            <button onClick={handleClick} className='border bg-red-600 rounded'>Click to add</button>
        </div>
        <div className='text-center space-y-2 mt-5'>
            {data.map((e)=>(
                <div>{e}</div>
            ))
            }
        </div>
    </div>
  )
}

export default Reminder