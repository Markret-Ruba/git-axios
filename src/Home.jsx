import axios from 'axios'
import React from 'react'
import  { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [data,setData] =useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='container '>
        <h2>CRUD operation</h2>
       <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Website</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map((d, i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.username}</td>
                        <td>{d.phone}</td>
                        <td>{d.website}</td>
                        <td>
                            <Link className='text-decoration-none btn btn-sm btn-success' to={`/add/${d.id}`}>Add</Link>
                            <button className='text-decoration-none btn btn-sm btn-danger' onClick={e=>handleDelete(d.id)}>Delete</button>
                            <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
  function handleDelete(id){
    const confirm = window.confirm("Do you like to Delete? ");
    if(confirm){
        axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
        .then(res =>{
            alert("Record Deleted");
            navigate('/')
    })
    }
  }
}

export default Home
