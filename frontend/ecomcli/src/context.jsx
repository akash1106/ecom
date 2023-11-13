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
    const [viewlist,setViewList]=useState([])
    const [wishlist,setWishList]=useState([])
    const [cart,setCart]=useState([])

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

    const getview=async(uid)=>{
        const res=await axios.get(baseURL+`getviewlist/${uid}`);
        if(res.data.message){
            alert(res.data.message);
            
        }else{
            console.log(res.data)
            setViewList(res.data)
        }
    }

    const addwish=async(pid)=>{
        const res=await axios.post(baseURL+'addwish',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "pid":pid,
                "uid":user[0].uid
            }
        });
        if(res.data.message){
            alert(res.data.message);
            
        }else{
            alert("ADDED")
        }
    }

    const addcart=async(pid)=>{
        const res=await axios.post(baseURL+'addcart',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "pid":pid,
                "uid":user[0].uid
            }
        });
        if(res.data.message){
            alert(res.data.message);
            
        }else{
            alert("ADDED")
        }
    }
    
    const getwishlist=async()=>{
        const res=await axios.get(baseURL+`getwishlist/${user[0].uid}`);
        if(res.data.message){
            alert(res.data.message);
            
        }else{
            setWishList(res.data)
        }
    }

    const removewish=async(wid1)=>{
        const res=await axios.post(baseURL+`removewish/${wid1}/${user[0].uid}`);
        if(res.data.message){
            alert(res.data.message);
            
        }else{
            alert("REMOVED")
        }
    }

    const getcart=async()=>{
        const res=await axios.get(baseURL+`getcart/${user[0].uid}`);
        if(res.data.message){
            alert(res.data.message);
            
        }else{
            setCart(res.data);
        }
    }

    const removecart=async(pid)=>{
        const res=await axios.post(baseURL+'removecart',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "pid":pid,
                "uid":user[0].uid
            }
        });
        if(res.data.message){
            alert(res.data.message);
            
        }else{
            alert("REMOVED")
        }
    }

    const placeorder=async(list)=>{
        const res=await axios.post(baseURL+'placeorder',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:{
                "list":list,
                "uid":user[0].uid
            }
        });
    }

    return <AppContext.Provider value={{user,isLogedIn,cat,catid,caidpro,viewlist,wishlist,cart,
        setCatid,registeUser,authUser,getcat,getprocaid,getview,addwish,addcart,getwishlist,removewish,getcart,removecart,placeorder,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppProvider,AppContext}