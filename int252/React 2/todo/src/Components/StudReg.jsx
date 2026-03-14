import React, { useRef, useState } from 'react'

const StudReg = () => {
    let [data, setData]= useState([]);
    let inputName=useRef();
    let inputReg=useRef();
    let inputCgpa=useRef();
    function handleClick() {
        let newData={
            name: inputName.current.value,
            regNo: inputReg.current.value,
            cgpa: inputCgpa.current.value
        };
        setData([newData, ...data]);
        inputName.current.value="";
        inputReg.current.value="";
        inputCgpa.current.value="";
    };
  return (
    <div>
        <div className='space-x-3 text-center'>
            <input type="text" placeholder='name' ref={inputName} className='border bg-amber-100 rounded'/>
            <input type="number" placeholder='Reg.No.' ref={inputReg} className='border bg-amber-100 rounded'/>
            <input type="number" placeholder='CGPA' ref={inputCgpa} className='border bg-amber-100 rounded'/>
            <button onClick={handleClick} className='border bg-red-400'>Register</button>
        </div>
        <div className='text-center space-y-2 '>
            {data.map((e)=>(
                <div>Name: {e.name} | Reg.No.: {e.regNo} | CGPA: {e.cgpa}</div>
            ))
            }

        </div>
    </div>
  )
}

export default StudReg