import { useState } from "react"
import React from 'react'
import {TextField, Button, Box, makeStyles} from '@material-ui/core'
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme=>({
  input:{
    width:"100%",
    marginTop:theme.spacing(2)
  },
  margin6:{
    marginTop: theme.spacing(6)
  },
  invalid:{
    color:'red',
  },
  form:{
    border:"2px solid #0275d8 ",
    padding:theme.spacing(5),
    width: "50%",// eslint-disable-next-line
    ['@media (max-width:900px)']:{
      width:'80%'
    }
  },
  heading:{
    color: "#0275d8"
  }
}))


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

  const clases = useStyles();

  return (
      <center className={clases.margin6}  >
      <Box className={clases.form}>
        <h3 className={clases.heading}>Login Form</h3>
        {props.status?(<h6 className={clases.invalid}>Either username or password invalid</h6>):("")}
        <TextField label= "Username" onChange={e=>unameChange(e)} value={uname} className={clases.input} autoFocus={true} id="username"/>
        <TextField label= "Password" onChange={e=>passChange(e)} value={pass} className={clases.input} type="password" id="password"/>
        <Button variant="contained" color="primary" onClick={handleOnclick} className={clases.margin6} id="loginButton">Login</Button>
        <p className="mt-3">
          If you don't have account.
        </p>    
        <Link to="/signup">Sign up</Link><br/>
      </Box>
      </center>
  )
}

export default Login;