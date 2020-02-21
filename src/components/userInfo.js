import React from 'react';
import axios from 'axios';
import { BKURL } from '../constants';
import { connect } from 'react-redux';
import Loading from './loading';
import { Redirect } from 'react-router-dom';
import User from './user';

class UserInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {userInfo:{}, isLoading:false}
  }

  componentDidMount = () => {
    if(this.props.data){
      this.setState({isLoading:true})
      axios.get(BKURL+"user/"+this.props.match.params.id,
      {headers:{'Authorization':'Bearer '+this.props.data.token}})
      .then((data)=>{this.setState({userInfo:data.data, isLoading:false})})
    }
  }
  
  
  
  render(){
    if(!this.props.isLogin){
      return <Redirect to = "/"/>
    }
    else if (this.state.isLoading){
      return <Loading />
    }
    return(
      <User userdata={this.state.userInfo} />
    )
  }
}

const mapStoreToProps=(state) =>{
  return {isLogin:state.isLogin, data:state.userData}
}

export default connect(mapStoreToProps)(UserInfo);