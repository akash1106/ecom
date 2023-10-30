import React , { useState }from "react";
import {useGlobalContext} from "../context";
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'


function RegisterPage() {
  const navigate = useNavigate();
  const [uname,setUname]=useState("");
  const [phno,setPhno]=useState(0);
  const [street,setStreet]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {user,registeUser}=useGlobalContext();
  const valid=()=>{
    let regex = /^[a-zA-Z]+$/;
    let val=true;
    let text="";
    alert(!(phno.toString().length==10))
    if (!(regex.test(uname))){
      text="Enter valid Username!!!";
      val=false
    }else if(!(phno.toString().length==10)){
      text="Enter valid phone number !!!"
      val=false
    }else if(!(username.includes('@') && username.includes('.'))){
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
      await registeUser(uname,phno,username,street,city,state,password);
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
              <form className="">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="floatingName"
                    placeholder="Name"
                    onChange={(e) => {
                      setUname(e.target.value);
                      
                    }}
                  ></input>
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control rounded-3"
                    id="floatingPhno"
                    placeholder="Phone number"
                    onChange={(e) => {
                      setPhno(e.target.value);
                      
                    }}
                  ></input>
                  <label htmlFor="floatingInput">Phone Number</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="floatingStreet"
                    placeholder="Street"
                    onChange={(e) => {
                      setStreet(e.target.value);
                      
                    }}
                  ></input>
                  <label htmlFor="floatingInput">Street</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="floatingCity"
                    placeholder="City"
                    onChange={(e) => {
                      setCity(e.target.value);
                      
                    }}
                  ></input>
                  <label htmlFor="floatingInput">City</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="floatingState"
                    placeholder="State"
                    onChange={(e) => {
                      setState(e.target.value);
                      
                    }}
                  ></input>
                  <label htmlFor="floatingInput">State</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingUser"
                    placeholder="name@example.com"
                    onChange={(e) => {
                      setUsername(e.target.value);
                      
                    }}
                  ></input>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="button"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Sign up
                </button>
                <small className="text-body-secondary">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr className="my-4"></hr>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
