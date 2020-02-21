import React from 'react';
import { Link } from 'react-router-dom';


const SeenList = (props) => {
  return (
    <ul className="list-group">
      {props.seenData.map((item,index)=>(
        <Link to={`/user/${item.userId}`} key={index}><li className="list-group-item">
          {item.username} visited your profile at {item.date}
        </li></Link>
      ))}
    </ul>
  )
}

export default SeenList;
