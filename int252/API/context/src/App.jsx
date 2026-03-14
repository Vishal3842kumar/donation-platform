import React, { useContext, useState } from 'react'
import Form from './Form';
import Mycontext from './Mycontext';

const App = () => {
  let[data,setData]=useState([])
  function handleAdd(newData){
    console.log(newData);
    setData([newData,...data])

  }
  
  let handleDelete=(index)=>{
    setData(data.filter((_,i)=>i!==index))
  }
  return (
    <Mycontext.Provider value={{handleAdd, handleDelete, data}}>
      <Form />
    </Mycontext.Provider>
  )
}

export default App