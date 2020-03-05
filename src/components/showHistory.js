import React from 'react';

const ShowHistory = (props) => {
  return (
    <div>  
      <div className="historylist">
        Last Logout History:
        {props.data.logoutHistory?(new Date(props.data.logoutHistory).toLocaleString()):("NO Data")}
      </div>
    </div>
  )
}
export default ShowHistory;