import React, { useState } from 'react';
import CookieButton from './cookieButton';
import cookie from 'react-cookie';
import { MSG } from '../constants';

const CookieMsg = () => {
  const [cookieMsg, setcookieMsg] = useState(cookie.load(MSG))
  const handleClick = () => {
    cookie.save(MSG,true,{maxAge:3600})
    setcookieMsg(cookie.load(MSG))
  }
  return(
    <div >
      {cookieMsg?(""):(<div className="bg-primary mt-3 p-2 text-white">
        <div className="cookieMSG">
          This website uses cookies in order to offer you most relavent information.
          Please Allow  cookies for optimal performance.
         </div>
        <span className="p-2"><CookieButton allow={handleClick}/></span>
      </div>)}
    </div>
  )
}

export default CookieMsg;