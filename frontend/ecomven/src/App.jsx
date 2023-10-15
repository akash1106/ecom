import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './component/HomePage'
import NavBar from './component/NavBar'
import LoginPage from './component/LoginPage'
import RegisterPage from './component/RegisterPage'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/register" element ={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
