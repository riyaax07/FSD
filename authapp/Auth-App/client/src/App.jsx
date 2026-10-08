import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from './components/counter.jsx'
import Stopwatch from './components/stopwatch.jsx'
import Login from './components/login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />

        <Route path="/counter" element={<Counter />} />

        <Route path="/stopwatch" element={<Stopwatch />} />

        <Route path="/mycart" element={<h1>My cart</h1>} />
        <Route path="/myorders" element={<h1>My orders</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/logout" element={<h1>Logout</h1>} />

        <Route path="*" element={<h1>Error: Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App