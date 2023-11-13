import React from 'react';
import MenuBar from './MenuBar';
import {useGlobalContext} from "../context";

function Profile_page() {
    const {user,changepass,getdata}=useGlobalContext();

    if(user.vid==undefined){
        getdata()
      }

    return (
        <div>
        <MenuBar/>
        <div className="section-center" >
            <div class="card rounded-5" style={{width:'30rem'}}>
                <div class="card-header">
                    <h2>profile</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: {user.vname}</li>
                    <li class="list-group-item">Phone no: {user.phno}</li>
                    <li class="list-group-item">Mail ID : {user.mailid}</li>
                    <li class="list-group-item">Street: {user.street}</li>
                    <li class="list-group-item">City: {user.city}</li>
                    <li class="list-group-item">State : {user.state}</li>
                </ul>
                <a class="btn btn-primary" onClick={()=>{
                    let old = prompt('Enter Old Password:');
                    let newpass = prompt('Enter New Password:');
                    let confirmpass=prompt('Confirm Password:');
                    alert(old==user.pas && newpass==confirmpass)
                    if(old==user.pas && newpass==confirmpass){
                        
                        changepass(newpass)
                    }else{
                        alert("Password not matched");
                    }
                  }}>Change password</a>
                  <a class="btn btn-primary" onClick={()=>{
                    localStorage.removeItem('user');
                    navigator('/login')
                  }}>LOGOUT</a>
            </div>
        </div>
        </div>
    );
}

export default Profile_page;