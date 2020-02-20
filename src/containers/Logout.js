import {removeAuth} from '../actions/index'
import { connect } from 'react-redux';
import LogoutButton from '../components/logoutButton';

const mapStoreToProps = (state) =>{
  return ({token:state.userData})
}

const mapDispatchToProps = dispatch => {
  return {logout:(token)=>dispatch(removeAuth(token))}
} 


export default connect(mapStoreToProps, mapDispatchToProps)(LogoutButton)