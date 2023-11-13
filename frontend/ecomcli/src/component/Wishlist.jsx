import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useGlobalContext} from "../context";
import MenuBar from './MenuBar';

function Wishlist() {
    const {user,getwishlist,wishlist,removewish,getdata}=useGlobalContext();
    const [temp,setTemp]=useState(0);
    const navigate = useNavigate();

    if(user.vid==undefined){
      getdata()
    }

    if(temp==0){
      getwishlist()
      setTemp(1)
    }
    
  return (
    <>
    <MenuBar/>
    <div className="section-center">
    {wishlist.map((ca,index)=>{
      return (
          <>
          <div className="card" key={index} style={{width:'18rem'}}>
            <div class="card-header">
            <h4>{ca.name}</h4>
            </div>
            <div className="card-body">
              <h5 className="card-text">price: {ca.price}</h5>
              <h5 className="card-text">quantity: {ca.qty}</h5>
              <a class="btn btn-primary" onClick={()=>{
                navigate(`/viewpro/${ca.pid}`)
              }}>View</a>
              <a class="btn btn-primary" onClick={()=>{
                removewish(ca.pid)
              }}>Remove</a>
            </div>
          </div>  
          </>
      )
  })}
  </div>
    </>
  )
}

export default Wishlist