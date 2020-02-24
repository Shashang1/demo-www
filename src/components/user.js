import React from 'react';
import defaultImg from '../default.jpg'

const User = (props) =>{
  return(
    <div className="card">
      <img src={props.userdata.image||defaultImg} alt="User-pic" className="card-img-top"/>
      <div className="card-body">
        <h4 className="card-title">{props.userdata.fname +" "+props.userdata.lname}</h4>
        <p>{props.userdata.position} at {props.userdata.worksAt}</p>
      </div>
    </div>
  )
}

export default User;
