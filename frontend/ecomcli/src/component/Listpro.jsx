import React,{useState} from 'react'
import MenuBar from './MenuBar';
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom';

function Listpro() {
  const {user,caidpro}=useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
    <div className="section-center">
    {caidpro.map((ca,index)=>{
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
                
              }}>View</a>
            </div>
          </div>  
          </>
      )
  })}
  </div>
    </>
  )
}

export default Listpro