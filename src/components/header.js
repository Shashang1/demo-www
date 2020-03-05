import React, { useState } from 'react';
import Logout from '../containers/Logout';
import { AppBar, Toolbar, makeStyles, IconButton, Typography, SwipeableDrawer, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import LogedInSidebarItem from './logedInSidebarItem';
import LogedOutSidebarItem from './logedOutSidebarItem';


const useStyles = makeStyles(theme=>({
  link:{
    margin: theme.spacing(1),
    '&:hover':{
      color:'grey',
      textDecoration:"none"
    },
    color:"black",
    textDecoration:'none'
  },
  appbar:{
    width:'100%'
  },
  button:{
    marginRight:10,
    marginLeft:"auto"
  },
  sidebar:{
    padding:theme.spacing(1),
    width:"250px"
  }
}))

const Header = (props)=> {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
  return (
    <div >
      
        <>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton edge= "start" color="inherit" aria-label="menu"  onClick={()=>setOpen(true)} id="menuButton">
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              My Website
            </Typography>
            {props.isLogin?(<section className={classes.button}>
                <Logout/>
              </section>
            ):("")}
          </Toolbar>
        </AppBar>
        <SwipeableDrawer anchor="left" open= {open} 
        onClose ={()=>setOpen(false)}
        onOpen ={()=>setOpen(true)}>
          <div className= {classes.sidebar}
          role="presentation"
          onClick = {()=>setOpen(false)}
          onKeyDown = {()=>setOpen(false)}
          >
            <h2>My Website</h2>
            <Divider />
            {props.isLogin?(<LogedInSidebarItem classes = {classes}/>):(<LogedOutSidebarItem classes= {classes}/>)}
          </div>
        </SwipeableDrawer>
        </>
    </div>
  )
}

export default Header;  