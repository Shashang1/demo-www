import React from 'react';
import {Link} from 'react-router-dom'
import {ListItem, List} from "@material-ui/core"

const LogedInSidebarItem = ({classes}) => (
  <List>
    <ListItem><Link to="/dashboard" className={classes.link}>Dashboard</Link></ListItem>
    <ListItem><Link to="/history" className={classes.link}>History</Link></ListItem>
    <ListItem><Link to="/search" className={classes.link}>Search</Link></ListItem>
    <ListItem><Link to="/seen" className={classes.link}>Profile Seens</Link></ListItem>
  </List>
)

export default LogedInSidebarItem;