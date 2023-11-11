import React , { useState }from "react";
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";

function RegisterPage() {
    const navigate = useNavigate();
    const [uname,setUname]=useState("");
    const [phno,setPhno]=useState(0);
    const [mailId, setMailId] = useState("");
    const [doorNo, setDoorNo] = useState();
    const [street,setStreet]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [password, setPassword] = useState("");
    const {user,registeUser}=useGlobalContext();
    const valid=()=>{
        let regex = /^[a-zA-Z/s]+$/;
        let val=true;
        let text="";
        alert(!(phno.toString().length==10))
        if (!(regex.test(uname))){
          text="Enter valid Username!!!";
          val=false
        }else if(!(phno.toString().length==10)){
          text="Enter valid phone number !!!"
          val=false
        }else if(!(mailId.includes('@') && mailId.includes('.'))){
          text="Enter valid email"
          val=false
        }else if(!(regex.test(city))){
          text="Enter valid city"
          val=false
        }else if(!(regex.test(state))){
          text="Enter valid state"
          val =false
        }else if((password.length<8)){
          text="Enter password atleast 8 character"
          val=false
        }
        if(val==false){
          alert(text)
        }
        return val;
      }
      const handleSubmit=async()=>{
        if (valid()){
          await registeUser(uname,phno,mailId,password,doorNo,street,city,state);
          alert(user.vid)
          if (user.vid){
            navigate('/Land');
          }else{
            navigate('/login')
          }
      }
    }
    return (
        <>
        <NavBar/>
      <div
        className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Sign up Now!</h1>
            </div>

            <div className="modal-body p-5 pt-0">
            <form class="row g-3">
              <div class="row g-3">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Name" aria-label="Name" onChange={(e) => {
                    setUname(e.target.value);
                  }}></input>
                </div>
                <div class="col">
                  <input type="number" class="form-control" placeholder="Phone number" aria-label="Phone number" onChange={(e) => {
                    setPhno(e.target.value);
                  }}></input>
                </div>
              </div>
              <div class="row g-3">
                <div class="col">
                  <input type="mail" class="form-control" placeholder="Mail ID" aria-label="Mail ID"onChange={(e) => {
                    setMailId(e.target.value);
                  }}></input>
                </div>
                <div class="col">
                  <input type="password" class="form-control" placeholder="Password" aria-label="Password"onChange={(e) => {
                    setPassword(e.target.value);
                  }}></input>
                </div>
              </div>
              <div class="row g-3">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Door no" aria-label="Door no"onChange={(e) => {
                    setDoorNo(e.target.value);
                  }}></input>
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="street" aria-label="street"onChange={(e) => {
                    setStreet(e.target.value);       
                  }}></input>
                </div>
              </div>
              <div class="row g-3">
                <div class="col">
                  <input type="text" class="form-control" placeholder="City" aria-label="city" onChange={(e) => {
                    setCity(e.target.value);
                  }}></input>
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="State" aria-label="State" onChange={(e) => {
                    setState(e.target.value);
                  }}></input>
                </div>
              </div>
              <small className="text-body-secondary">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <button class="btn btn-primary" type="button" onClick={()=>{handleSubmit()}}>submit</button>

            </form>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default RegisterPage


