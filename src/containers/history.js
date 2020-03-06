import { connect } from 'react-redux';
import History from '../components/history';


const mapStoreToPorps = (state) => {
  return {isLogin: state.isLogin, isLoading:state.isLoading, data:state.userData}
}

export default connect(mapStoreToPorps, null)(History)
