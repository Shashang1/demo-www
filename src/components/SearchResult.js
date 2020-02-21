import React from 'react'
import SearchResponseList from './SearchResponseList';

const SearchResult = (props) => {
  return (
    <div>
      {props.data.map((item, index)=>(<SearchResponseList item={item} key={index}/>))}
    </div>
  )
}

export default SearchResult;