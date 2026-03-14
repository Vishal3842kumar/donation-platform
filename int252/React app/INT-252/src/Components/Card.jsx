import React from 'react'

const Card = () => {
  return (
     <div className='border p-4 text-center mx-auto rounded-2xl bg-gray-300'>
      <div>
        <img src="https://www.lpu.in/lpu-assets/images/home-page/highlights/modi.webp" alt="" className='w-50 rounded-2xl'/>
      </div>
      <h1>Card name</h1>
      <p>Card description</p>
    </div>
  )
}

export default Card