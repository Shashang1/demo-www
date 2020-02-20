import React from 'react';


const HistoryList = (props) =>{
  return (
    <ul className="list-group p-3">
      {props.data.map((data, index)=><li key = {index} className="list-group-item">{data}</li>)}
    </ul>
  )
}
export default HistoryList;