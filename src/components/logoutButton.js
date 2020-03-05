import React from 'react';
import { Button } from '@material-ui/core';

const LogoutButton = (props) => {
  return (
      <Button onClick={() => props.logout(props.token.token)} color ="inherit" id="logout">Log  out</Button>
  )
}

export default LogoutButton;