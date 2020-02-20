import React from 'react';

const History = (props) =>{
  console.log(props.data)
  if (props.data){
    console.log(props.data.data)
  }
  return(<h3>Check console</h3>)
}

export default History;