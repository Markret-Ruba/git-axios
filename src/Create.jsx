import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [inputData,setInputdata]= useState({
    name:'',
    email:'',
    username:'',
    phone:'',
    website:''
  })

  const navigate = useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', inputData)
    .then(res => {
      alert("Data Posted successfully! ")
      navigate('/')
    })
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className='form-control'
            onChange={e => setInputdata({...inputData, name:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className='form-control'
             onChange={e => setInputdata({...inputData, email:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="name">Username:</label>
            <input type="text" name="name" className='form-control'
             onChange={e => setInputdata({...inputData, username:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="phone">phone:</label>
            <input type="number" name="phone" className='form-control'
             onChange={e => setInputdata({...inputData, phone:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="website">website:</label>
            <input type="website" name="website" className='form-control'
             onChange={e => setInputdata({...inputData, website:e.target.value})}
            />
          </div><br/>
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
   )
}

export default Create
