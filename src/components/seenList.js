import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme=>({
  link:{
    color:'black',
    textDecoration:'none'
  }
}))

const SeenList = (props) => {
  const classes = useStyles()
  return (
    <List>
      {props.seenData.map((item,index) =>(
        <ListItem key={index}><Link to={`/user/${item.userId}`} className={classes.link +" list"}>
          {item.username} visited your profile on {new Date(item.date).toLocaleString()}
        </Link></ListItem>
      ))}
    </List>
  )
}

export default SeenList;
