import React from 'react';
import { BKURL } from '../constants';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import Loading from './loading';
import ShowHistory from './showHistory';

class History extends React.Component{
  constructor(){
    super()
    this.state = {data:[]}
  }

  componentDidMount(){
    if (this.props.data){
    axios.get(BKURL+"history",{headers:{'Authorization':'Bearer '+this.props.data.token}})
    .then((data)=>{this.setState({data:data })})
    }
  }

  render(){
    if(this.props.data && this.state.data.data){
      return(<ShowHistory data= {this.state.data.data}/>)
    }
    else if(this.props.data){
      return(<Loading/>)
    }
    return(<Redirect to="/"/>)
  }
}


export default History;