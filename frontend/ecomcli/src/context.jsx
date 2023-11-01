import React,{useContext,useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const navigate = useNavigate();
    const baseURL="http://127.0.0.1:8000/";
    const [user,setUser]=useState({});
    const [isLogedIn,setIsLogedIn]=useState(false)
    const registeUser=async(name,phno,mail,password,doorno,street,city,state)=>{
        const res=await axios.post(baseURL+'adduser',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "name":name,
                "phno":phno,
                "mail":mail,
                "password":password,
                "doorno":doorno,
                "street":street,
                "city":city,
                "state":state,
            }
        });
        if(res.data.message){
            alert(res.data.message);
            setUser({});
        }else{
            setUser(res.data);
            setIsLogedIn(true);
        }
    }
    
    return <AppContext.Provider value={{user,registeUser
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppProvider,AppContext}