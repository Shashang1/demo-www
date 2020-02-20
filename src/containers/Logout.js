import {removeAuth} from '../actions/index'
import { connect } from 'react-redux';
import LogoutButton from '../components/logoutButton';
const mapDispatchToProps = dispatch => {
  return {logout:()=>dispatch(removeAuth())}
} 

export default connect(null, mapDispatchToProps)(LogoutButton)