import React from 'react';
import Logout from '../containers/Logout';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme=>({
  link:{
    margin: theme.spacing(3),
    '&:hover':{
      color:'grey',
      textDecoration:"none"
    },
    color:'white',
    // eslint-disable-next-line
    ['@media (max-width:1020px)']:{
      margin:theme.spacing(2)
    },
    // eslint-disable-next-line
    ['@media (max-width:600px)']:{
      margin:theme.spacing(0.5)
    }
  },
  appbar:{
    width:'100%'
  },
  logout:{
    marginRight:theme.spacing(1)
  }
}))

const Header = (props)=> {
  const classes = useStyles();
  
  
  return (
    <div >
      {props.isLogin?(
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Link to="/" className={classes.link}>Dashboard</Link>
            <Link className= {classes.link} to="/history">History</Link>
            <Link className= {classes.link} to="/search">Search</Link>
            <Link className= {classes.link} to="/upload">Upload picture</Link>
            <Link className= {classes.link} to="/seen">Profile seen</Link>
            <Logout className="classes.logout"/>
          </Toolbar>
        </AppBar>
      ):("")}
    </div>
  )
}

export default Header;