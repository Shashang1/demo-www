import React from 'react';

const CookieButton = (props) => {
  return (
    <button className="btn btn-light text-primary" onClick={props.allow}>Allow</button>
  )
}

export default CookieButton;