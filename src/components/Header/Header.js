import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation,useNavigate } from "react-router-dom";
import logo from "./logo.png";
export default function Header() {
  const location = useLocation();
  const [active,setActive]=useState({
    "home":"",
    "Login":"",
    "nftcard":"",
    "Contact":"", 

  })

  const navigate = useNavigate();
  
  const onHome = ()=>{
    navigate("/");
    }

  const onLogin = ()=>{
      navigate("/Login");
    } 

  const onNftcard = ()=>{
        navigate("/Nftcard");
      
        } 
  const onContact = ()=>{
      navigate("/Contact");
      }
  
  useEffect(() => {
    console.log(location);
    if(location.pathname==="/")
      {
        console.log("running")
        setActive({...active,"home":"underline"})

      }
      
     else if(location.pathname==="/Login")
     {
       console.log("running")
       setActive({...active,"Login":"underline"})
     }

     else if(location.pathname==="/Nftcard")
     {
       console.log("running")
       setActive({...active,"Nftcard":"underline"})
     } 
     else if(location.pathname==="/Contact")
     {
       console.log("running")
       setActive({...active,"Contact":"underline"})
      

     } 
  }, [location]);
  
    
  
  return (
    <div className="head">
      <img src={logo} className="logohead"  alt="" onClick={onHome}/>
      <div className="elements">
        
        <button onClick={onHome} className={"navlink " + active.home}>
          Home
        </button>{" "}
        {" "}

        <button onClick={onLogin} className={"navlink " + active.Login}>
          Login 
        </button>{" "}
        {" "}
        <button onClick={onNftcard } className={"navlink " + active.Nftcard}>
          Nftcard
        </button>{" "}
        {" "}
        <button onClick={onContact} className={"navlink " + active.Contact}>
          Contact Us
        </button>{" "}
      </div>
    </div>

  );
}
