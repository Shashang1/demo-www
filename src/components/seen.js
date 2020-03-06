import React from 'react';
import axios from 'axios';
import { BKURL } from '../constants';
import { connect } from 'react-redux';
import SeenList from './seenList';

class Seen extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoading:false, seenData:[]}
  }


  componentDidMount=()=>{
    if(this.props.mode==="ghost"){
      this.setState({isLoading:true})
      axios.get(BKURL+"seen",
      {headers:{'Authorization':'Bearer '+this.props.token}})
      .then(res => this.setState({seenData:res.data, isLoading:false}))
    }    
  }
  
  render(){
    return (
      <div>
        {this.props.mode==="ghost"?(<SeenList seenData={this.state.seenData}/>):(<h2>You are not Ghost user</h2>)}
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return {mode:state.userData.data.mode, token:state.userData.token}
}

export default connect(mapStoreToProps)(Seen);


