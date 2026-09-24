import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}/>
          <Route path="*" element={<h1>Error:page not found</h1>}/>
          <Route path='/mycart' element={<h1>My cart</h1>}/>
          <Route path='/myorders' element={<h1>My orders</h1>}/>
          <Route path='/settings' element={<h1>Settings</h1>}/>
          <Route path='/profie' element={<h1>Profile</h1>}/>
          <Route path='/logout' element={<h1>logout</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
