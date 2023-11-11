import React,{useContext,useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const navigate = useNavigate();
    const baseURL="http://127.0.0.1:8000/";
    const [user,setUser]=useState({});
    const [isLogedIn,setIsLogedIn]=useState(false)
    const [cat,setCat]=useState([])
    const [catid,setCatid]=useState(-1)
    const [caidpro,setcaidpro]=useState([])

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

    const authUser=async(mail,password)=>{
        const res=await axios.post(baseURL+'authuser',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "mail":mail,
                "password":password,
            }
        });
        console.log("Auth User",res.data);
        if(res.data.message){
            alert(res.data.message);
            setUser({});
        }else{
            setUser(res.data);
            setIsLogedIn(true);
        }
        return user
    }

    const getcat=async()=>{
        const res=await axios.get(baseURL+'getcat');
        if(res.data.message){
            alert(res.data.message);
        }else{
            setCat(res.data);
        }
        return user
    }

    const getprocaid=async(caid)=>{
        const res=await axios.post(baseURL+'getprocaid',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "caid":caid
            }
        });
        if(res.data.message){
            alert(res.data.message);
            
        }else{
            setcaidpro(res.data)
        }
    }
    
    return <AppContext.Provider value={{user,isLogedIn,cat,catid,caidpro,setCatid,registeUser,authUser,getcat,getprocaid,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppProvider,AppContext}