import React from 'react'

const Home = () => {
  return (
    <>
    <div >
        <div className='grid grid-cols-2 '>
            <form className='space-y-4 border flex flex-col items-center justify-center' action="">
                <input className='border p-3 text-xl rounded-full' type="text" placeholder='Enter your name' />
                <input className='border p-3 text-xl rounded-full' type="email" placeholder='Enter your email' />
                <input className='border p-3 text-xl rounded-full' type="password" placeholder='Enter your password' />
            </form>
        </div>
        <div className='border p-3'>
            <img className="" src="https://img.freepik.com/free-vector/globe-grid-earth_78370-7981.jpg?semt=ais_hybrid&w=740&q=80"/>
        </div>
    </div>
    </>
  )
}

export default Home