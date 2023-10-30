import React from 'react';
import MenuBar from './MenuBar';
import {useGlobalContext} from "../context";

function Order() {
    const {user}=useGlobalContext();

    if (user.vid==undefined){
        window. location. replace("http://localhost:5173/login")
      }

    return (
        <div>
        
        </div>
    );
}

export default Order;