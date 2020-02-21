import React from "react";

const SearchBar = (props)=>{
  return (
    <input type="text" className="m-1 p-1" onChange={props.onChange} value={props.value} placeholder="search..."/>
  )
}

export default SearchBar;