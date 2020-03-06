import React from 'react'
import SearchResponseList from './searchResponseList';

const SearchResult = (props) => {
  return (
    <div>
      {props.data.map((item, index)=>(item.userId===props.curUser.data.userId?(""):(<SearchResponseList item={item} key={index} index={index}/>)))}
    </div>
  )
}

export default SearchResult;