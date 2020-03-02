import React from 'react';
import HistoryList from './historyList';

const ShowHistory = (props) => {
  return (
    <div>
      <div className="historylist p-3">
        Login History:
        <HistoryList data= {props.data.loginhistory.sort(function(a,b){return b-a})} />
      </div>   
      <div className="historylist   p-3">
        Logout History:
        <HistoryList data= {props.data.logoutHistory.sort(function(a,b){return b-a})} />  
      </div>
    </div>
  )
}
export default ShowHistory;