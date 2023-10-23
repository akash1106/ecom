import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './component/HomePage'
import LoginPage from './component/LoginPage'
import RegisterPage from './component/RegisterPage'
import LandPage from './component/LandPage'
import AddProduct from './component/Add_product'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/register" element ={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/Land" element={<LandPage/>}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
      </Routes>
    </>
  )
}

export default App
