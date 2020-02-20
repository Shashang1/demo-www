import React from 'react';
import axios from 'axios'
import { BKURL } from '../constants';
import Loading from './loading';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {data:[], isLoading:false}
  }
  componentDidMount(){
    if(this.props.userData){
    this.setState({isLoading:true})
    axios.get(BKURL+"search",{headers:{'Authorization':'Bearer '+this.props.userData.token}}).then(res=>this.setState({data:res.data, isLoading:false}))
    }
  }

  render(){
    if(this.state.isLoading){
      return <Loading />
    }
    else if(!this.props.userData){
      return (<Redirect to="/" />)
    }
    return <SearchResult data={this.state.data} />
  }
}

const mapStoretoProps =(state) =>{
  return {userData:state.userData}
}

export default connect(mapStoretoProps, null)(Search);