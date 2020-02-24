import React from 'react';
import axios from 'axios'
import { BKURL } from '../constants';
import Loading from './loading';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';
import FilterWorksat from './FilterWorksat';
import FilterPostion from './filterPostition';
import ApplyBut from './applyBut';
import SearchBar from './searchBar';
import filterData from '../containers/filterData'

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {data:[], isLoading:false, worksAt:"All", position:"All",res:[]}
  }
  componentDidMount(){
    if(this.props.userData){
    this.setState({isLoading:true})
    axios.get(BKURL+"search?worksAt="+this.state.worksAt+"&position="+this.state.position,
    {headers:{'Authorization':'Bearer '+this.props.userData.token}})
    .then(res=>this.setState({data:res.data, isLoading:false,res:res.data}))
    }
  }

  handleOnChangeFilterWork =(e) =>{
    this.setState({worksAt:e.target.value})
  }
  handleOnChangePosition =(e) =>{
    this.setState({position:e.target.value})
  }
  handleOnApply = () =>{
    this.setState({isLoading:true})
    axios.get(BKURL+"search?worksAt="+this.state.worksAt+"&position="+this.state.position,
    {headers:{'Authorization':'Bearer '+this.props.userData.token}})
    .then(res=>this.setState({data:res.data, isLoading:false,res:res.data}))
  }
  handleSearchBarChange = (e) =>{
    this.setState({res:filterData(this.state.data,e.target.value)})
  }

  render(){
    if(!this.props.userData){
      return (<Redirect to="/" />)
    }
    return (
      <div>
        <FilterWorksat onChange={this.handleOnChangeFilterWork}/>
        <FilterPostion onChange={this.handleOnChangePosition}/>
        <ApplyBut onClick={this.handleOnApply}/>
        <SearchBar value={this.state.searchValue} onChange={this.handleSearchBarChange} />
        {this.state.isLoading?(<Loading />):("")}
        {this.state.res?(<SearchResult data={this.state.res} curUser = {this.props.userData}/>):(<h2>NO data</h2>)}
      </div>
      )
  }
}

const mapStoretoProps =(state) =>{
  return {userData:state.userData}
}

export default connect(mapStoretoProps, null)(Search);