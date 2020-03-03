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
        <ListItem><Link to={`/user/${item.userId}`} key={index} className={classes.link}>
          {item.username} visited your profile at {new Date(item.date).toLocaleString()}
        </Link></ListItem>
      ))}
    </List>
  )
}

export default SeenList;
