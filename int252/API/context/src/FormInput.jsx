import React, { use, useContext, useState } from 'react'
import Mycontext from './Mycontext'

const FormInput = () => {
    let{handleAdd}=useContext(Mycontext)

    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")

    let handleClick=(e)=>{
        e.preventDefault()
        let newData={
            name:name,
            email:email,
            password:password
        }
        handleAdd(newData)
    }
  return (
    
    <div>
        <form action="" onSubmit={(e)=>handleClick(e)}>
            <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default FormInput