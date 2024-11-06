import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Owner from './pages/Owner'
import User from './pages/User'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/owner' element={<Owner/>}/>
            <Route path='/user' element={<User/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App