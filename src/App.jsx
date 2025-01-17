import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Add from "./Add"
import Read from "./Read"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/add/:id' element={<Add />}></Route>
        <Route path='/read/:id' element={<Read />}></Route>
    </Routes>
    </BrowserRouter>
   
        
  )
}

export default App
