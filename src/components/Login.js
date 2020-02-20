import { useState } from "react"
import React from 'react'

const Login =(props) =>{
  const [uname, setuname] = useState(""); 
  const [pass, setpass] = useState("")
  const unameChange = (event)=> {
    setuname(event.target.value)
  }
  
  const passChange = (event)=> {
    setpass(event.target.value)
  }
  
  const handleOnclick = ()=> {
    props.handleLogin({username:uname, password:pass})
  }

  return (
      <center className="mt-5">
      <div className="loginform border border-success p-5">
        <h3 className="text-success">Login Form</h3>
        {props.status?(<h6 className= "text-danger">Either username or password invalid</h6>):("")}
        <label of= "username">Username:</label>
        <input type="text" name="username" onChange={e=>unameChange(e)} value = {uname} className="form-control"/><br/>
        <label of="password">Password:</label>
        <input type="password" name="password" onChange={e=>passChange(e)} value={pass} className="form-control"/><br/>
        <input type="button" onClick={handleOnclick} value="Login" className="btn btn-success"/>
      </div>
      </center>
    
  )
}

export default Login;