import React, { useState } from 'react'
import { useParams} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Read() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Data,setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
      },[])

  return (
    <div className='container'>
        
            <div className='container p-5'>
                <p>{Data.id}</p>
                <p>{Data.name}</p>
                <p>{Data.email}</p>
                <p>{Data.username}</p>
                <p>{Data.phone}</p>
                <p>{Data.website}</p>
                <Link to="/">Back</Link>
            </div>
        
    </div>
   
  )
}

export default Read
