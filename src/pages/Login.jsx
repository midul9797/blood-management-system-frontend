import { useState } from "react";
import "../styles/Login.css";
import { Alert } from "antd";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [user,setUser]=useState(null);
  const [password,setPassword] = useState(null);
  
  const navigate = useNavigate()
  const handleLogin = (e)=>{
    e.preventDefault();
    console.log("clicked")
    if(user === 'admin' && password==='123456')navigate("/home",{replace: true})
    else Alert("Wrong User name or password")
  } 
  return (
    <div className="login_body"  >
        
        <h2 className="login_heading">Admin Login</h2>
        <div className="login_input_box">
            <span className="login_username">Username:</span>
            <input className="login_username_input" type="text" onBlur={(e)=>setUser(e.target.value)} />
            <span className="login_password">Password:</span>
            <input className="login_password_input" type="password" onBlur={(e)=>setPassword(e.target.value)} />
        </div>
        <button className="login_btn" onClick={handleLogin}>LogIn</button>
    </div>
  )
}
