import React from 'react';

const SearchResponseList = (props) => {
  return <li className="list-group-item">Username: {props.item.username}</li>
}

export default SearchResponseList;