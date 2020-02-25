import { useState } from "react"
import React from 'react'
import {TextField, Button, Box} from '@material-ui/core'
import { Link } from "react-router-dom";

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
      <center className="mt-5"  >
      <Box className="loginform border border-primary p-5">
        <h3 className="text-primary">Login Form</h3>
        {props.status?(<h6 className= "text-danger">Either username or password invalid</h6>):("")}
        <TextField label= "Username" onChange={e=>unameChange(e)} value={uname} className="form-control mt-4" autoFocus={true}/>
        <TextField label= "Password" onChange={e=>passChange(e)} value={pass} className="form-control mt-4" type="password" />
        <Button variant="contained" color="primary" onClick={handleOnclick} className="mt-5">Login</Button>
        <p className="mt-3">
          If you don't have account.
        </p>
        <Link to="/signup">Sign up</Link><br/>
      </Box>
      </center>
  )
}

export default Login;