import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import {useGlobalContext} from "../context";
import axios from "axios";
import MenuBar from './MenuBar';

function ViewPro() {
    const {pid} = useParams();
    const {user,addwish,addcart}=useGlobalContext();
    const [pro,setPro]=useState({"caid":-1,"name":"Loading","pid":-1,"price":-1,"qty":-1,"vid":-1});
    const [spec,setSpec]=useState([]);
    const [temp,setTemp]=useState(0);
    const navigate = useNavigate();
    const baseURL="http://127.0.0.1:8000/";
    const getproid=async(pid,uid)=>{
      const res=await axios.post(baseURL+`getproid/${uid}`,{
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:{
              "pid":pid,
          }
      });
      if(res.data.message){
          alert(res.data.message);
          
      }else{
          setPro(res.data[0])
          console.log(res.data[0])
      }
  }

  const getspecid=async(pid)=>{
    const res=await axios.post(baseURL+'getspecid',{
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:{
            "pid":pid
        }
    });
    if(res.data.message){
        alert(res.data.message);
        
    }else{
        setSpec(res.data)
    }
}

if(temp==0){
    setTemp(1);
    getproid(pid,user[0].uid);
    getspecid(pid); 
}
console.log(pro)
  return (
    <>
    <MenuBar/>
    <div className="section-center" >
        <div class="card rounded-5" style={{width:'30rem'}}>
            <div class="card-header">
                <h2>Name: {pro.name}</h2>
            </div>
            <div className="card-body">
            <h5 className="card-text">price: {pro.price}</h5>
            <h5 className="card-text">quantity: {pro.qty}</h5>
              <ul class="list-group list-group-flush">
              {spec.map((spe,index)=>{
                return(
                  <li class="list-group-item" key={index}>{spe.key} : {spe.value}</li>
                )
              })}
              </ul>
              <button class="btn btn-primary" onClick={()=>{addwish(pro.pid)
                  
                }} style={{width:'100%'}}>Add to wishlist</button><br></br>
              <button class="btn btn-primary" onClick={()=>{addcart(pro.pid)
                  
                }} style={{width:'100%',marginBottom:'1rem'}}>Add to Cart</button>
                
              </div>
        </div>
    </div>
    </>
  )
}

export default ViewPro