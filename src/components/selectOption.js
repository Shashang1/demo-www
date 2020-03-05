import React from 'react';
import { InputLabel, Select, MenuItem, FormControl, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  select:{
    width:"40%",
    margin:theme.spacing(1)
  }
}))
const SelectOption = (props) => {
  const classes = useStyles()
  return (
    <FormControl className= {classes.select}>
      <InputLabel id={props.id}>{props.name}</InputLabel>
      <Select labelId={props.id} onChange={props.onChange} value={props.value} id={props.id+"-select"}>
        {props.data.map((item, index)=>(<MenuItem key={index}value={item} id={"list-"+item.split(" ").join("")}>{item}</MenuItem>))}
      </Select>
    </FormControl>
  )
}

export default SelectOption;