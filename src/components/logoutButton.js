import React from 'react';
import { Button } from '@material-ui/core';

const LogoutButton = (props) => {
  return (
      <Button onClick={() => props.logout(props.token.token)} color ="inherit">Log  out</Button>
      // <button className="btn btn-success text-white" onClick={()=>props.logout(props.token.token)}>Log out</button> 
  )
}

export default LogoutButton;