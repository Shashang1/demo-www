import React from 'react';
import { BKURL } from '../constants';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import Loading from './loading';
import ShowHistory from './showHistory';
import DatePicker from './datePciker'
import ApplyBut from './applyBut';


class History extends React.Component{
  constructor(){
    super()
    this.state = {data:[],date:""}
  }

  onDateChange = (e) =>{
    this.setState({date:new Date(e.target.value)})
  }
  onDateClick = () =>{
    if(this.state.date){
      axios.get(BKURL+"history",{params:{date:this.state.date},headers:{'Authorization':'Bearer '+this.props.data.token}})
    .then((data)=>{this.setState({data:data})})
    }
  }

  render(){
    if(this.props.data){
      return(
        <div>
          <DatePicker onChange={this.onDateChange} onClick={this.onDateClick}/>
          <ApplyBut onClick={this.onDateClick} />
          {this.state.data.data && <>
            <ShowHistory history= "login" data= {this.state.data.data.loginhistory}/>
            <ShowHistory history= "logout" data= {this.state.data.data.logoutHistory}/>
          </>}
        </div>  
      )
    }
    else if(this.props.data){
      return(<Loading/>)
    }
    return(<Redirect to="/"/>)
  }
}


export default History;