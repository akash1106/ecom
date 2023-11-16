import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useGlobalContext} from "../context";
import MenuBar from './MenuBar';

function Profile() {
    const {user,changepass,getdata}=useGlobalContext();
    const navigate = useNavigate();

    if(user[0].uid==-1){
      getdata()
    }
  return (
    <>
    <MenuBar/>
    <div className="section-center" >
        <div class="card rounded-5" style={{width:'30rem'}}>
            <div class="card-header">
                <h2>profile</h2>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: {user[0].uname}</li>
                <li class="list-group-item">Phone no: {user[0].phno}</li>
                <li class="list-group-item">Door no: {user[0].doorno}</li>
                <li class="list-group-item">Mail ID : {user[0].mailid}</li>
                <li class="list-group-item">Street: {user[0].street}</li>
                <li class="list-group-item">City: {user[0].city}</li>
                <li class="list-group-item">State : {user[0].state}</li>
            </ul>
            <a class="btn btn-primary" onClick={()=>{
              navigate('/order')
              }}>My Order</a>
            <a class="btn btn-primary" onClick={()=>{
                let old = prompt('Enter Old Password:');
                let newpass = prompt('Enter New Password:');
                let confirmpass=prompt('Confirm Password:');
                if(old==user[0].pas && newpass==confirmpass){
                    changepass(newpass)
                }else{
                    alert("Password not matched");
                }
              }}>Change password</a>
              <a class="btn btn-primary" onClick={()=>{
                localStorage.removeItem('user');
                localStorage.removeItem('pass');
                navigator('/login')
              }}>LOGOUT</a>
        </div>
    </div> 
    </>
  )
}

export default Profile