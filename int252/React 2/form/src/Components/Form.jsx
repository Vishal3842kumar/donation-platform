import React from 'react'
import FormInput from './FormInput'
import FormOutput from './FormOutput'

const Form = ({ handleAdd, data, handleDelete }) => {
  return (
    <div>
      <FormInput addData={handleAdd} />
      <FormOutput data={data} handleDelete={handleDelete} />
    </div>
  )
}

export default Form