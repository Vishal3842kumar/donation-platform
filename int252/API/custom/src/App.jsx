import React from 'react'
import useCounter from './useCounter'

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div></div>
  )
}

export default App