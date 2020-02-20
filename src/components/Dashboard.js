import React from 'react';
import { Redirect } from 'react-router-dom';


const dashboard = (props)=>{  
  if(props.data){
    return(<h1>Hello {props.data.username}</h1>)
  }

  return (<Redirect to="/"/>)
}

export default dashboard;