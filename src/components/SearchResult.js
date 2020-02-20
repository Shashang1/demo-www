import React from 'react'
import SearchResponseList from './SearchResponseList';

const SearchResult = (props) => {
  return (
    <ul className="list-group">
      {props.data.map((item, index)=>(<SearchResponseList item={item} key={index}/>))}
    </ul>
  )
}

export default SearchResult;