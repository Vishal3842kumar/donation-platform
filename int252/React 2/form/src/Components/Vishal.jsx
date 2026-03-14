import React, { useState } from 'react'

const Vishal = () => {
    let[name, setName] = useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] = useState("");

    let[data, setData] = useState([]);

    const handleSubmit = () => {
        let newData = {name, email, password};
        setData([...data, newData]);
        console.log(data);
        
    }
  return (
    <div>
        <div>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={(e)=>(setName(e.target.value))} placeholder='Enter your name' />
                <br />
                <input type="email" onChange={(e)=>(setEmail(e.target.value))} placeholder='Enter your email' />
                <br />
                <input type="password" onChange={(e)=>(setPassword(e.target.value))} placeholder='Enter your password' />
                <br />
                <button type='submit' onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Vishal