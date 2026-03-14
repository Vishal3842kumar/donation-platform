import React, { useContext } from 'react'
import Mycontext from './Mycontext'

const FormOutput = () => {
  let {handleDelete}=useContext(Mycontext)
    let {data}=useContext(Mycontext)
  return (
    <div>
        {data.map((item,index)=>(
            <div key={index}>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.password}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default FormOutput