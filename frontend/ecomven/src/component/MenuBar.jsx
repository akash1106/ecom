import React from 'react'
import {useGlobalContext} from "../context";
import { Link } from 'react-router-dom'
import "./MenuBar.css"

function MenuBar() {
  const {user,getdata}=useGlobalContext();
  if(user.vid==-1){
    getdata()
  }
  return (
    <>
    <nav className='navbar ' style={{
        borderBottom:"1px solid #fff"
      }}>
          <Link to="/Land">Welcome {user.vname} </Link>
          <Link to=""></Link>
          <Link to=""></Link>
          <Link to=""></Link>
          <Link to="/order">order</Link>
          <Link to="/profile">profile</Link>
      </nav>
    </>
  )
}

export default MenuBar