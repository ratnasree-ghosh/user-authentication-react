import React from "react";
import {useState,useEffect} from "react";

import {useNavigate} from "react-router-dom";


const Signup = ()=>{

   let [name, setName] = useState(null);
   let [email, setEmail] = useState(null);
   let [pass, setPass] = useState(null);
   let [conPass, setConPass] = useState(null);
   let [errMsg, setErrMsg] = useState(null);
   let [sucMsg, setSucMsg] = useState(null);

   const navigate = useNavigate();
   
   useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/");
    }else{
        setTimeout(()=>{
            navigate('/profile')
        },1000);
    }
    },[navigate]);
   

   

   function token(length){
    let result ="";
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charLen = char.length;
    let counter = 0;
    while(counter<length){
        result +=char.charAt(Math.floor(Math.random()*charLen));
        counter++;
    }

    return result;

   }

    function createStorage(){

        if(pass !==conPass){
            alert("Confirm password is not matching! Try Again ")
        }else{
            if(name===null || email===null || pass===null){
                setErrMsg("Error : All the fields are mandatory");
                setSucMsg(null);
            
               }else{
                setErrMsg(null);
                setSucMsg("Successfully Signed Up!");
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("password", pass);
                localStorage.setItem("access-token", token(16));
            
                setTimeout(()=>{
                    navigate('/profile')
                },1000);
            }
        }
   
        
    
    }

    return (
   <div >
        <div className="header">
            <h3>Header</h3>
            <h3>Signup</h3>
        </div>

        <div className="sign-con">
            <h1>Signup</h1>
            <div className="sign-input">
            <input placeholder="Full Name"  onChange={(e)=> setName(e.target.value)} required/>
            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}  required/>
            <input type="password" placeholder="Password" onChange={(e)=> setPass(e.target.value)}  required/>
            
            <input type="password" placeholder="Confirm Password" onChange={(e)=> setConPass(e.target.value)} required/>
           <p style={{color: "red"}}>{errMsg}</p>
           <p style={{color: "green"}}>{sucMsg}</p>
            <button className="btn" onClick={createStorage}>Signup</button>
            </div>
        </div>
    </div>
    
    )
}

export default Signup;