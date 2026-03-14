import React from 'react'

const Navbar = () => {
  return (
      <div className='flex justify-between items-center p-4 bg-slate-300'>
      <div>
        <img src="https://www.lpu.in/authenticate/lpu%20logo.png" alt="" className='w-28' />
      </div>
      <div className='flex space-x-4'>
        <button className='p-4 text-lg bg-blue-700 border rounded'>Home</button>
        <button className='p-4 text-lg bg-blue-700 border rounded'>About us</button>
        <button className='p-4 text-lg bg-blue-700 border rounded'>Contact us</button>
      </div>
      <div>
        <button className='p-4 text-lg bg-blue-700 border rounded'>Download App</button>
      </div>
    </div>
  )
}

export default Navbar