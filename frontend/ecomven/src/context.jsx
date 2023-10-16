import React,{useContext,useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const navigate = useNavigate();
    const baseURL="http://127.0.0.1:8000/";
    const [user,setUser]=useState({});
    const [allProduct,setAllProduct]=useState([]);
    const [isLogedIn,setIsLogedIn]=useState(false);

    const registeUser=async(name,phno,mailid,street,city,state,password)=>{
        const res=await axios.post(baseURL+'venauth',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "name":name,
                "phno":phno,
                "mailid":mailid,
                "street":street,
                "city":city,
                "state":state,
                "password":password
            }
        });
        if(res.data.message){
            alert(res.data.message);
        }else{
            setUser(res.data);
            setIsLogedIn(true);
            console.log(res.data)
            alert("done");
        }
    }

    const authUser=async(username,password)=>{
        const res=await axios.post(baseURL+'venauthget',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "mailid":username,
                "password":password
            }
        });
        if(res.data.message){
            alert(res.data.message);
        }else{
            setUser(res.data);
            setIsLogedIn(true);
            alert("done");
        }
    }
    
    return <AppContext.Provider value={{user,isLogedIn,registeUser,authUser
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppProvider,AppContext}