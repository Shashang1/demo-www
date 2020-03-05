import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  input:{
    width:"90%",
    margin:theme.spacing(1)
  }
}))

const SearchBar = (props)=>{
  const classes = useStyles()
  return (
    <TextField label="Search" onChange={props.onChange} value={props.value} className={classes.input} id="search-bar"/>
  )
}

export default SearchBar;