import React, { useState } from 'react';
import cookie from 'react-cookie';
import { MSG } from '../constants';
import { Snackbar, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab'

const CookieMsg = () => {
  const [cookieMsg, setcookieMsg] = useState(cookie.load(MSG))
  const handleClick = () => {
    cookie.save(MSG,true,{maxAge:1300})
    setcookieMsg(cookie.load(MSG))
  }
  return(
    <div>
      {cookieMsg?(""):(
      <Snackbar open={true}>
        <Alert severity="info" action = {<Button color="inherit" size="small" onClick={handleClick}>Allow</Button>}>
          This website uses cookies in order to offer you most relavent information.
          Please Allow  cookies for optimal performance.
        </Alert>

      </Snackbar>)}
    </div>
  )
}

export default CookieMsg;