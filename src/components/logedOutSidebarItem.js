import React from 'react'
import {Link} from 'react-router-dom'
import {List, ListItem} from '@material-ui/core'

const LogedOutSidebarItem = ({classes}) => (
  <List>
    <ListItem><Link to="/" className= {classes.link}>Login</Link></ListItem>
    <ListItem><Link to="/signup" className= {classes.link}>Signup</Link></ListItem>
  </List>
)

export default LogedOutSidebarItem;