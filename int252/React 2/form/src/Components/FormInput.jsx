import React, { useRef } from 'react'

const FormInput = ({ addData }) => {
  const inputData = useRef(null)

  const addCurrent = () => {
    const value = (inputData.current?.value || '').trim()
    if (!value) return
    if (typeof addData === 'function') addData(value)
    inputData.current.value = ''
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addCurrent()
  }

  return (
    <div className='flex gap-4 justify-center m-4'>
      <label htmlFor='todo-input' className='sr-only'>Add todo</label>
      <input
        id='todo-input'
        type='text'
        ref={inputData}
        onKeyDown={handleKeyDown}
        className='bg-amber-200 border rounded text-center px-3 py-2'
        placeholder='Type todo and press Enter or Add'
        aria-label='Todo input'
      />
      <button
        onClick={addCurrent}
        className='bg-blue-500 text-white rounded px-4 py-2'
        type='button'
      >
        Add
      </button>
    </div>
  )
}

export default FormInput