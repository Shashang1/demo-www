import { connect } from "react-redux"
import dashboard from "../components/Dashboard"



const mapStateToProps = (state) =>{
  return ({data:state.userData})
}


export default connect(mapStateToProps, null) (dashboard)