import React from 'react';
import {Link} from 'react-router-dom'
import {ListItem, List} from "@material-ui/core"

const LogedInSidebarItem = ({classes}) => (
  <List>
    <ListItem><Link to="/dashboard" className={classes.link} id={"dashboard-link"}>Dashboard</Link></ListItem>
    <ListItem><Link to="/history" className={classes.link} id={"history-link"}>History</Link></ListItem>
    <ListItem><Link to="/search" className={classes.link} id={"search-link"}>Search</Link></ListItem>
    <ListItem><Link to="/seen" className={classes.link} id={"seen-link"}>Profile Seens</Link></ListItem>
  </List>
)

export default LogedInSidebarItem;