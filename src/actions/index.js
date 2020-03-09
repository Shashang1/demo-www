import { SET_AUTH, REMOVE_AUTH, SET_HISTORY,GET_HISTORY} from "../constants"

 
  
const getAuth = (obj) =>({
  type: SET_AUTH,
  payload:obj
})

const removeAuth = (token) =>({
  type:REMOVE_AUTH,
  token:token
})

const getHistory = (token) =>({
  type:GET_HISTORY,
  token:token
})
const setHistory = (loginHistory, logoutHistory) =>({
  type:SET_HISTORY,
  loginHistory,
  logoutHistory
})

export {getAuth, removeAuth, setHistory, getHistory}

  
