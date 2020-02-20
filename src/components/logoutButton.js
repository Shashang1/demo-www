import React from 'react';

const LogoutButton = (props) => {
  return (
      <button className="btn btn-success text-white" onClick={()=>props.logout(props.token.token)}>Log out</button> 
  )
}

export default LogoutButton;