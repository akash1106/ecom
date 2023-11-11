import React,{useState} from 'react'
import MenuBar from './MenuBar';
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom';

function Land() {
  const {user,cat,getcat,setCatid,getprocaid}=useGlobalContext();
  const navigate = useNavigate();
  const [temp,setTemp]=useState(0);
//   if (user.vid==undefined){
//     window. location. replace("http://localhost:5173/login")
//   }
  if(temp==0){
    getcat();
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
    </>
  )
}

export default Land