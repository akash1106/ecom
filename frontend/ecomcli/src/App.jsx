import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePAge from './component/HomePAge'
import RegisterPage from './component/RegisterPage'
import LoginPage from './component/LoginPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePAge/>}></Route>
      <Route path="/register" element ={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
