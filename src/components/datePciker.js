import React from 'react'
import { TextField } from '@material-ui/core'


const DatePicker = (props) => {
  return(
    <form className=""  noValidate>
      <TextField id="date" onChange={props.onChange} label="Date" type="date" className="" InputLabelProps={{shrink:true}}/>
    </form>
  )
}

export default DatePicker;