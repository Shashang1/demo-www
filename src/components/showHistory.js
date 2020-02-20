import React from 'react';
import HistoryList from './historyList';

const ShowHistory = (props) => {
  console.log(props.data)
  return (
    <div>
      <div className="historylist p-3">
        Login History:
        <HistoryList data= {props.data.loginhistory} />
      </div>   
      <div className="historylist   p-3">
        Logout History:
        <HistoryList data= {props.data.logoutHistory} />
      </div>
    </div>
  )
}
export default ShowHistory;