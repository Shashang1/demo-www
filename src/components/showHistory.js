import React from 'react';
import HistoryList from './historyList'

const ShowHistory = (props) => {
  return (
    <div>  
      <div className="historylist">
        Last {props.history} History:
        {props.data?(
          props.data.map((item, index)=>(
            <HistoryList key= {index} data= {item} name= {props.history}/>
          ))
        ):("NO Data")}
      </div>
    </div>
  )
}
export default ShowHistory;