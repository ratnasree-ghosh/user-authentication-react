import React from "react";
import {useNavigate} from "react-router-dom";

const Profile = ()=>{

    const navigate = useNavigate();

    function deleteStorage(){
        localStorage.clear();
        navigate('/');
    }

    

    var obj ={
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        pass: localStorage.getItem("password"),
        token: localStorage.getItem("acces-token")
    }

    return (
         <>
        <div className="header">
            <h3>Header</h3>
            <h3>Signup</h3>
        </div>

        <div className="pro-box">
            
            <div className="profile-con">
                <h1>Profile</h1>
               <div> Full Name: {obj.name} </div>
                <div>Email: {obj.email}</div>
               <div>password: {obj.pass}</div>
            <button className="pro-btn" onClick={deleteStorage} >Logout</button>
            </div>
        </div>
        </>
       
     
   

    )
}

export default Profile;