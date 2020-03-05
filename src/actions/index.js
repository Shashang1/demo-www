import { SET_AUTH, REMOVE_AUTH} from "../constants"

 
  
const getAuth = (obj) =>({
  type: SET_AUTH,
  payload:obj
})

const removeAuth = (token) =>({
  type:REMOVE_AUTH,
  token:token
})

export {getAuth, removeAuth}

  
