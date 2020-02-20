import { getAuth } from "../actions"
import { connect } from 'react-redux'
import Login from '../components/Login'

const mapDiapatchToProps = (dispatch) =>{
  return {handleLogin:(obj)=>{dispatch(getAuth(obj))}}
}


export default connect(null, mapDiapatchToProps)(Login)