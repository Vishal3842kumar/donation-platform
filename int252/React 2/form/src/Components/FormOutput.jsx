import React from 'react'

const FormOutput = ({ data, handleDelete }) => {
  return (
    <>
      {data.map((value, index) => (
        <div className='bg-white p-5 border' key={index}>
          <div className='bg-amber-900 text-white flex justify-evenly items-center'>
            <span>{index + 1}</span>
            <span>{value}</span>
            <button
              className='bg-blue-600 rounded p-2'
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>

        </div>
      ))}
    </>
  )
}

export default FormOutput