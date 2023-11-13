import React from 'react';
import MenuBar from './MenuBar';
import {useGlobalContext} from "../context";
import { useState } from 'react';

function Order() {
    const {user,getvenorder,myorder,updateorder}=useGlobalContext();
    const [temp,setTemp]=useState(0)

    if(temp==0){
        getvenorder()
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
                      <a class="btn btn-primary" onClick={()=>{
                        updateorder(myorder.id[index])
                      }}>Delivered</a>
                    </div>
                  </div>  
                  </>
              )
          })}
          </div>
        </>
    );
}

export default Order;