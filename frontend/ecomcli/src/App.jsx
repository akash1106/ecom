import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePAge from './component/HomePAge'
import RegisterPage from './component/RegisterPage'
import LoginPage from './component/LoginPage'
import Land from './component/Land'
import Listpro from './component/Listpro'
import ViewPro from './component/ViewPro'
import Wishlist from './component/Wishlist'
import Cart from './component/Cart'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePAge/>}></Route>
      <Route path="/register" element ={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/land" element={<Land/>}></Route>
      <Route path="/listpro" element={<Listpro/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/viewpro/:pid" element={<ViewPro/>}></Route>
    </Routes>
    </>
  )
}

export default App
