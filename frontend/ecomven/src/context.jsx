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
    const [cat,setCat]=useState([]);

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
            setUser({});
        }else{
            setUser(res.data);
            setIsLogedIn(true);
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
            setUser({});
        }else{
            setUser(res.data);
            alert(user.vid)
            setIsLogedIn(true);
            alert("done");
        }
    }
    
    const getcat= async()=>{
        const res=await axios.get(baseURL+'getcat');
        setCat(res.data);
    }

    const addpro=async(name,caid,price,qty,spec)=>{
        const res=await axios.post(baseURL+'addpro',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "vid":user.vid,
                "caid":caid,
                "name":name,
                "price":price,
                "qty":qty,
                "spec":spec,
            }
        });
        if(res.data.message=="fail"){
            alert("Failed...")
        }
    }

    const getproid=async()=>{
        const res=await axios.get(baseURL+'getpro/'+user.vid);
        setAllProduct(res.data);
    }

    const updateproqty=async(pid,qty)=>{
        const res=await axios.post(baseURL+'updatepro',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "pid":pid,
                "qty":qty
            }
        })
        if(res.data.message=="fail"){
            alert("Failed...")
        }
    }

    const changepass=async(pas)=>{
        alert("in")
        const res=await axios.post(baseURL+'changepass',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "vid":user.vid,
                "password":pas
            }
        })
        console.log(res)
        if(res.data.message=="fail"){
            alert("Failed...")
        }
    }
    
    return <AppContext.Provider value={{user,isLogedIn,cat,allProduct,setAllProduct,registeUser,authUser,getcat,addpro,getproid,updateproqty,changepass
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppProvider,AppContext}