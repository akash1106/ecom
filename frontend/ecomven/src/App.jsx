import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './component/HomePage'
import LoginPage from './component/LoginPage'
import RegisterPage from './component/RegisterPage'
import LandPage from './component/LandPage'
import AddProduct from './component/Add_product'
import Profile_page from './component/Profile_page'
import Order from './component/Order'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/register" element ={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/Land" element={<LandPage/>}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/profile" element={<Profile_page/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
      </Routes>
    </>
  )
}

export default App
