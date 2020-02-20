import React from 'react';


const HistoryList = (props) =>{
  return (
    <ul className="list-group p-3">
      {props.data.map((item, index)=><li key = {index} className="list-group-item">{new Date(item).toUTCString()}</li>)}
    </ul>
  )
}
export default HistoryList;