import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Outlet></Outlet>
        <h2>home page</h2>
      <Navbar/>
      
    </div>
  )
}

export default Home
