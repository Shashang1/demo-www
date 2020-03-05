 
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button:{
    margin:theme.spacing(2),
    width:"10%"
  }
}))
const ApplyBut = (props) =>{
  const classes = useStyles()
  return (
    <Button variant="contained" onClick={props.onClick} color="primary" className= {classes.button} id="applyButton">Apply</Button>
  )
}

export default ApplyBut;