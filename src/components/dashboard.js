import React from 'react';
import { Redirect } from 'react-router-dom';
import User from './user';


const dashboard = (props)=>{  
  if(props.data){
    return(
      <center>
        Wellcome {props.data.data.username}
        <div className="dashboard-detail m-3 p-3">
          <User userdata= {props.data.data} />
        </div>
      </center>
    )
  }
  return (<Redirect to="/"/>)
}

export default dashboard;