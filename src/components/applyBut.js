import React from 'react';

const ApplyBut = (props) =>{
  return (
    <button type="button" className="btn btn-success m-1" onClick={props.onClick}>Apply</button>
  )
}

export default ApplyBut;