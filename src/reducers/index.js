import { SET_AUTH, GET_AUTH, REMOVE_AUTH, AUTH_REMOVED, NO_AUTH } from "../constants";
const initialState = {isLoading:false, isLogin:false}

const reducer = (state = initialState, action)=>{
  switch(action.type){
    case SET_AUTH:
      return {...state, isLoading:true, invalid:false}
    case GET_AUTH:
      return {...state,isLoading:false, userData:action.data, isLogin:action.isLogin}
    case NO_AUTH:
      return {state, invalid:true}
    case REMOVE_AUTH:
      return {...state,isLoading:true }
    case AUTH_REMOVED:
      return initialState
    default:
      return state;
  } 
}
export default reducer;