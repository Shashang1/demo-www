import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'


const HistoryList = (props) => {
  return(
    <ListItem>
      <ListItemText className={props.name+"history-item"} primary={new Date(props.data).toLocaleString()} />
    </ListItem>
  )
}

export default HistoryList;