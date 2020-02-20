import { SET_AUTH, REMOVE_AUTH } from "../constants"

 
  
const getAuth = (obj) =>({
  type: SET_AUTH,
  payload:obj
})

const removeAuth = () =>({
  type:REMOVE_AUTH
})

export {getAuth, removeAuth}

  
