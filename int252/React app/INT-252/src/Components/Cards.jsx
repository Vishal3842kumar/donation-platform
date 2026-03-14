import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='grid grid-cols-4 p-5 pl-2'>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Cards