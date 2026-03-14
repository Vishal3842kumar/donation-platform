import React, { useEffect, useReducer, useState } from 'react'
import Form from './Components/Form'
import Vishal from './Components/Vishal'

// function reducer(state, action) {
//   switch (action.type) {
//     case 'SET':
//       return Array.isArray(action.payload) ? action.payload : state
//     case 'ADD':
//       return [action.payload, ...state];

//       case "DELETE":
//         return state.filter((_, index) => index !== action.payload);

//     default:
//       return state;
//   }
// }

const App = () => {
  // const [data, dispatch] = useReducer(reducer, [])
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   const controller = new AbortController()
  //   const fetchData = async () => {
  //     setLoading(true)
  //     setError(null)
  //     try {
  //       const response = await fetch('https://6932a686e5a9e342d2704355.mockapi.io/Vishal', { signal: controller.signal })
  //       if (!response.ok) throw new Error(`Fetch failed: ${response.status}`)
  //       const res = await response.json()
  //       dispatch({ type: 'SET', payload: res })
  //     } catch (err) {
  //       if (err.name !== 'AbortError') setError(err.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchData()
  //   return () => controller.abort()
  // }, [])

  // function addData (item) {
  //   // setData([e, ...data]);
  //   dispatch({type:"ADD", payload: item})
  // };

  // function handleDelete(index){
  //   dispatch({type:"DELETE", payload: index})
  // }
  
  return (
    <div>
      {/* <Form handleAdd={addData} data={data} handleDelete={handleDelete}/>
      <Counter /> */}
      <Vishal />
    </div>
  )
}

export default App