import React from 'react';

const FilterWorksat = (props) => {
  return (
    <select className="selectpicker p-1 m-2" onChange={props.onChange}>
      <option value="All">All</option>
      <option value= "Bestpeers">Bestpeers</option>
      <option value= "Stark Industries">Stark industries</option>
    </select>
  )
}

export default FilterWorksat;