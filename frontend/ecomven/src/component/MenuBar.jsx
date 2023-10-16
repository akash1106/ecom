import React from 'react'
import {useGlobalContext} from "../context";
import { Link } from 'react-router-dom'
import "./MenuBar.css"

function MenuBar() {
  const {user}=useGlobalContext();
  console.log(user)
  return (
    <>
    <nav className='navbar ' style={{
        borderBottom:"1px solid #fff"
      }}>
          <Link to="">Welcome {user.vname} </Link>
          <Link to=""></Link>
          <Link to=""></Link>
          <Link to=""></Link>
          <Link to="">order</Link>
          <Link to="">profile</Link>
      </nav>
    </>
  )
}

export default MenuBar