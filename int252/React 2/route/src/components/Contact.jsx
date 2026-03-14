import React from 'react'

const Contact = () => {
  return (
    <div className='border p-4 w-120 m-auto mt-50'>
        <form className='space-y-4 border flex flex-col items-center justify-center p-2' action="">
                <input className='border p-3 text-xl rounded-full' type="text" placeholder='Enter your name' />
                <input className='border p-3 text-xl rounded-full' type="email" placeholder='Enter your email' />
                <input className='border p-3 text-xl rounded-full' type="password" placeholder='Enter your password' />
        </form>
    </div>
  )
}

export default Contact