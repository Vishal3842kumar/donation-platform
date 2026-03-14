import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  let [inputName, setInputName] = useState('')
  let [email, setEmail] = useState('')
  let [num, setInputNum] = useState('')
  let [pass, setPass] = useState('')
  let [fetchData, setfetchData] = useState([])
  let [editingId, setEditingId] = useState(null)
  let [searchQuery, setSearchQuery] = useState('')
  let [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios.get('https://6932a686e5a9e342d2704355.mockapi.io/Vishal')
    .then((res) => {
      setfetchData(old => [...old, ...res.data])
      setSearchResults(old => [...old, ...res.data])
    })
  }, [])
  // let err = {}
  let onSubmit = (e) => { 
    e.preventDefault()
    // if(!inputName ){ 
    //   alert('Error in input field');
    // }
    // else if(!/^[A-Za-z\s]+$/.test(inputName)){
    //   alert('Name must contain only letters (no numbers or special characters)');
    // }
    // else if(!email){
    //   alert('Error in email field');
    // }
    // else if(!num || String(num).length !== 10){
    //   alert('Number must be exactly 10 digits');
    // }
    // else if(!pass ){
    //   alert('Error in password field');
    // }

    // else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/.test(pass)){
    //   alert('Password must be at least 8 characters and include uppercase, lowercase, number, and special character');
    // }
    let data={
      name: inputName,
      email: email,
      number: num,
      password: pass
    }
    if (editingId) {
      axios.put(`https://6932a686e5a9e342d2704355.mockapi.io/Vishal/${editingId}`, data)
        .then((res) => {
          setfetchData(prev => prev.map(item => item.id === editingId ? res.data : item))
          setSearchResults(prev => prev.map(item => item.id === editingId ? res.data : item))
          setEditingId(null)
          setInputName('')
          setEmail('')
          setInputNum('')
          setPass('')
        })
        .catch(err => console.error('Update error:', err))
    } else {
      axios.post('https://6932a686e5a9e342d2704355.mockapi.io/Vishal', data)
        .then((res) => {
          setfetchData(prev => [...prev, res.data])
          setSearchResults(prev => [...prev, res.data])
          setInputName('')
          setEmail('')
          setInputNum('')
          setPass('')
        })
        .catch(err => console.error('Create error:', err))
    }
    
   

  }
  const handleDelete = (id) => {
    axios.delete(`https://6932a686e5a9e342d2704355.mockapi.io/Vishal/${id}`)
      .then(() => {
        setfetchData(prev => prev.filter(item => item.id !== id))
        setSearchResults(prev => prev.filter(item => item.id !== id))
      })
      .catch(err => console.error('Delete error:', err))
  }
  const handleEdit = (item) => {
    setInputName(item.name || '')
    setEmail(item.email || '')
    setInputNum(item.number || '')
    setPass(item.password || '')
    setEditingId(item.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // const handleCancelEdit = () => {
  //   setEditingId(null)
  //   setInputName('')
  //   setEmail('')
  //   setInputNum('')
  //   setPass('')
  // }

  const handleSearch = () => {
    const q = (searchQuery || '').trim().toLowerCase()
    if (!q) {
      setSearchResults(fetchData)
      return
    }
    const filtered = fetchData.filter(item => {
      return (
        (item.name || '').toLowerCase().includes(q) ||
        (item.email || '').toLowerCase().includes(q) ||
        String(item.number || '').toLowerCase().includes(q)
      )
    })
    setSearchResults(filtered)
  }
  return (
    <div>
      <div className='flex '>
      <form action="" className="flex gap-4  mx-auto  bg-pink-600 p-6 rounded" onSubmit={(e) => onSubmit(e)}>
        <input type="text" value={inputName} onChange={(e)=>{setInputName(e.target.value)}} className="border border-gray-300 p-2 rounded" placeholder='Enter your name' required/>

        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="border border-gray-300 p-2 rounded" placeholder='Enter your email' required/>
        <input type="number" value={num} onChange={(e)=>{setInputNum(e.target.value)}} className="border border-gray-300 p-2 rounded" placeholder='Enter your number' required/>
        <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} className="border border-gray-300 p-2 rounded" placeholder='Enter your password' required/>
        <input type="submit" className="border border-gray-300 text-white p-2 rounded" placeholder='Submit' />
      </form>
      <div className='border flex items-center p-6 gap-5  bg-pink-600  rounded'>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='border px-2 p-1' placeholder='search item' />
        <button type="button" onClick={handleSearch} className='border  rounded text-white p-2'>Click to search</button>
      </div>
      </div>
      <div>
        {searchResults.map((item) => (
          <div key={item.id} className='border m-4 p-2'> 
            <div>{`Name: ${item.name}`}</div>
            <div>{`Email: ${item.email}`}</div>
            <div>{`Number: ${item.number}`}</div>
            <div>{`Password: ${item.password}`}</div>
            <div className='flex gap-2 mt-2'>
              <button type="button" onClick={() => handleEdit(item)} className="bg-blue-600 text-white px-2 py-1 rounded">Edit</button>
              <button type="button" onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App