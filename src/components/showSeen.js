import React, { useState } from 'react'
import {SwipeableDrawer, Divider} from '@material-ui/core'

const ShowSeen = () =>{ 
  
  const [seen, setSeen] = useState()
  
  return(
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
  )
}
export default ShowSeen;