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
          <Link to="/Land">Welcome {user[0].uname} </Link>
          <Link to=""></Link>
          <Link to=""></Link>
          <Link to="">wishlist</Link>
          <Link to="">cart</Link>
          <Link to="/profile">profile</Link>
      </nav>
    </>
  )
}

export default MenuBar