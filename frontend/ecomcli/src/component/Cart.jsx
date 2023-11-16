import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import {useGlobalContext} from "../context";
import MenuBar from './MenuBar';

function Cart() {
    const {user,getcart,cart,removecart,placeorder,getdata}=useGlobalContext();
    const [temp,setTemp]=useState(0);
    const navigate = useNavigate();

    if (temp==0){
        getcart()
        setTemp(1)
    }
    if(user[0].uid==-1){
      getdata()
    }

    var total=0;
    var lis=[];
    for (var i of cart) {
        total+=i.price
        lis.push(i.pid)
    }

    // if(user.vid==undefined){
    //   getdata()
    // }

  return (
    <>
    <MenuBar/>
    <h2>Total Amount: {total}</h2>
    <a class="btn btn-primary" onClick={()=>{
        var boo=confirm('Want to place order!!!')
        if (boo){
            placeorder(lis)
            for(var i of lis){
                removecart(i)
            }
            alert("Order placed successfully")
            window.location.reload()
        }else{
        }
      }}>Check Out</a>
      <div className="section-center">
    {cart.map((ca,index)=>{
      return (
          <>
          <div className="card" key={index} style={{width:'18rem'}}>
            <div class="card-header">
            <h4>{ca.name}</h4>
            </div>
            <div className="card-body">
              <a class="btn btn-primary" style={{width:'100%'}} onClick={()=>{
                navigate(`/viewpro/${ca.pid}`)
              }}>View</a>
              <a class="btn btn-primary" style={{width:'100%'}} onClick={()=>{
                removecart(ca.pid)
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

export default Cart