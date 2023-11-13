import React from 'react'
import {useGlobalContext} from "../context";
import { Link } from 'react-router-dom'
import "./MenuBar.css"

function MenuBar() {
  const {user,getdata}=useGlobalContext();

  if(user.vid==undefined){
    getdata()
  }
  return (
    <>
    <nav className='navbar ' style={{
        borderBottom:"1px solid #fff"
      }}>
          <Link to="/Land">Welcome {user[0].uname} </Link>
          <Link to=""></Link>
          <Link to=""></Link>
          <Link to="/wishlist">wishlist</Link>
          <Link to="/cart">cart</Link>
          <Link to="/profile">profile</Link>
      </nav>
    </>
  )
}

export default MenuBar