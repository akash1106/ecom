import React,{useState} from 'react'
import MenuBar from './MenuBar';
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom';




function Land() {
  const {user,cat,getcat,setCatid,getprocaid,getview,viewlist}=useGlobalContext();
  const navigate = useNavigate();
  const [temp,setTemp]=useState(0);
//   if (user.vid==undefined){
//     window. location. replace("http://localhost:5173/login")
//   }
  if(temp==0){
    getcat();
    getview(user[0].uid);
    setTemp(1);
  }
  return (
    <>
    <MenuBar/>
    <div className="section-center">
    {cat.map((ca,index)=>{
      return (
          <>
          <div className="card" key={index} style={{width:'15rem',height:'4rem'}} onClick={()=>{setCatid(ca.caid);getprocaid(ca.caid);navigate('/listpro')}}>
            <div class="card-body">
                <h4>{ca.sub2}</h4>
            </div>
          </div>  
          </>
      )
  })}
  </div> 
  <hr></hr>
  <h3>view product</h3>
  <div className="section-center">
  
    {viewlist.map((ca,index)=>{
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
            </div>
          </div>  
          </>
      )
  })}
  </div>
    </>
  )
}

export default Land