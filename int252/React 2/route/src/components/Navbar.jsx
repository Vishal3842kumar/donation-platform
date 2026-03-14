import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center bg-gray-700 h-16 text-white '>
        <div className='flex space-x-6'>
        <p>
            <Link to={'/'}>Home</Link>
        </p>
        <p>
            <Link to={'/contact'}>Contact</Link>
        </p>
        <p>
            <Link to={'/about'}>About</Link>
        </p>
    </div>
    <div className='flex space-x-8 items-center'>
        <img className="w-20 h-10" src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="" />
        <p>Log in</p>
    </div>
    </div>
  )
}

export default Navbar