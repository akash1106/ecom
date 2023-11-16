import React, { useState } from 'react'
import MenuBar from './MenuBar';
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom';

function Order() {
  const {user,myorder,getorder,getdata}=useGlobalContext();
  const navigate = useNavigate();
  const [temp,setTemp]=useState(0);

  if(user[0].uid==-1){
    getdata()
  }

  if (temp==0){
    getorder();
    setTemp(1)
  }
  return (
    <>
    <MenuBar/>
    <div className="section-center">
    {myorder.data.map((ca,index)=>{
      return (
          <>
          <div className="card" key={index} style={{width:'18rem'}}>
            <div class="card-header">
            <h4>{ca.name}</h4>
            </div>
            <div className="card-body">
              <h5 className="card-text">Status: {myorder.satus[index] ? "Delivered" : "Not Delivered"}</h5>
            </div>
          </div>  
          </>
      )
  })}
  </div>
    </>
  )
}

export default Order