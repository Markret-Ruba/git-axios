import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {id}=useParams();

    const [inputData,setInputdata]= useState({
       
        name:'',
        email:'',
        username:'',
        phone:'',
        website:''
      })
    
      const navigate = useNavigate();

      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => setInputdata(res.data))
        .catch(err => console.log(err))
      },[])
    
      const handleSubmit=(event)=>{
        event.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/users/' + id, inputData)
        .then(res => {
          alert("Data Added successfully! ")
          navigate('/')
        })
      }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <form onSubmit={handleSubmit}>
       
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" className='form-control' value={inputData.name}
          onChange={e => setInputdata({...inputData, name:e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" className='form-control' value={inputData.email}
           onChange={e => setInputdata({...inputData, email:e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="name" className='form-control' value={inputData.username}
           onChange={e => setInputdata({...inputData, username:e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="number">phone:</label>
          <input type="number" name="phone" className='form-control' value={inputData.phone}
           onChange={e => setInputdata({...inputData, phone:e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="website">website:</label>
          <input type="website" name="website" className='form-control' value={inputData.website}
           onChange={e => setInputdata({...inputData, website:e.target.value})}
          />
        </div><br/>
        <button className='btn btn-info'>Add</button>
      </form>
    </div>
  </div>
  )
}

export default Add
