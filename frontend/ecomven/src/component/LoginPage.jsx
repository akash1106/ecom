import React, { useState } from 'react'
import './LoginPage.css'

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Hello!! Welcome Back</h1>
            
    
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  
                  <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setUsername(e.target.value)}}></input>
                  <label htmlFor="floatingInput">Email address</label>

                </div>
                <div className="form-floating mb-3">
                 
                  <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Login</button>
                <small className="text-body-secondary">By clicking Login, you agree to the terms of use.</small>
                <hr className="my-4"></hr>
                
              </form>
            </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default LoginPage