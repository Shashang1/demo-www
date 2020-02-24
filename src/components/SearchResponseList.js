import React from 'react';
import defaultImg from '../default.jpg'
import { Link } from 'react-router-dom';

const SearchResponseList = (props) => {

  return (  
    <div className="media border p-2">
      <img src={props.item.image||defaultImg} alt="userImg" width="10%" className="border"/>
      <div className="media-body p-2 m-1">
        <h5><Link to={`user/${props.item.userId}`} >{ props.item.username}</Link></h5>
        <p>Name: {props.item.fname} {props.item.lname}</p>
        {props.item.position} at {props.item.worksAt}
      </div>
    </div>
  
  )
}

export default SearchResponseList;