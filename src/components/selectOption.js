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
      <InputLabel id={props.id}>Works At</InputLabel>
      <Select labelId={props.id} onChange={props.onChange}>
        {props.data.map(item=>(<MenuItem value={item}>{item}</MenuItem>))}
      </Select>
    </FormControl>
  )
}

export default SelectOption;