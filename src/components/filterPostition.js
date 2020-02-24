import React from "react";

const FilterPosition = (props) => {
  return (
    <select className="selectpicker p-1 m-2" onChange={props.onChange}>
      <option >All</option>
      <option value= "Software Trainee">Software Trainee</option>
      <option value= "Electrical engineer">Electrical engineer</option>
      <option value= "Software developer">Software Developer</option>
    </select>
  )
}

export default FilterPosition;