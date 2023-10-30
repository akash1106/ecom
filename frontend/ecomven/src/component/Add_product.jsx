import React, { useState } from 'react';
import MenuBar from './MenuBar';
import { useNavigate } from 'react-router-dom'
import {useGlobalContext} from "../context";

function AddProduct() {
    const navigate = useNavigate();
    const {user,cat,getcat,addpro}=useGlobalContext();
    const [caid,setCaid]=useState(-1);
    const [name,setName]=useState("");
    const [price,setPrice]=useState(-1);
    const [qty,setQty]=useState(-1);
    const [spec,setSpec]=useState([]);
    const [no,setNo]=useState(0);
    if(no==0){
        getcat();
        setNo(1);
    } 
    if (user.vid==undefined){
        window. location. replace("http://localhost:5173/login")
      }
    return (
        <>
            <MenuBar/>
            <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-lg-5" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw mb-0 fs-2">Product</h1>
                        </div>
                        <div className="modal-body p-5 pt-0">
                            <form className='row g-4'>
                                <div className="col-lg-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder='Product Name' onChange={(e)=>{setName(e.target.value)}}></input>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="inputSub" className="form-label">categories</label>
                                    <select id="inputSub" className="form-select" onChange={(e)=>{setCaid(e.target.value)}}>
                                    {cat.map((ca,index)=>{
                                        return (
                                            <option key={index} value={ca.caid}>{ca.sub1+"-"+ca.sub2}</option>
                                        )
                                    })}
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="Price" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="inputName" placeholder='Price' onChange={(e)=>{setPrice(e.target.value);}}></input>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="quantity" className="form-label">Quantity</label>
                                    <input type="number" className="form-control" id="inputquantity" placeholder='Quantity' onChange={(e)=>{setQty(e.target.value)}}></input>
                                </div>
                                <button type="button" className="btn btn-outline-primary " onClick={()=>{setSpec(spec.concat([["",""]]))}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                              </svg></button>
                              {spec.map((spe,index)=>{
                                return (
                                    <>
                                        <div  className="col-lg-5">
                                            <label htmlFor="key" className="form-label">key</label>
                                            <input type="text" className="form-control" id="inputKey" onChange={(e)=>{
                                                var de=spec;
                                                de[index][0]=e.target.value;
                                                setSpec(de);
                                            }}></input>
                                        </div>
                                        <div  className="col-lg-5">
                                            <label htmlFor="value" className="form-label">value</label>
                                            <input type="text" className="form-control" id="inputvalue" onChange={(e)=>{
                                                var de=spec;
                                                de[index][1]=e.target.value;
                                                setSpec(de);
                                            }}></input>
                                        </div>
                                        <div  className="col-lg-2">
                                            <label htmlFor="Remove" className="form-label">Remove</label>
                                            <button type="button" className="btn btn-danger" onClick={()=>{
                                                var newArray=[...spec];
                                                newArray.splice(index, 1);
                                                setSpec(newArray);
                                            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                            </svg></button>
                                        </div>
                                    </>
                                )
                            })}
                            <button class="btn btn-primary" type="submit" onClick={()=>{addpro(name,caid,price,qty,spec);navigate('/Land');}}>Sumbit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddProduct