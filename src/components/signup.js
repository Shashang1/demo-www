import React from 'react';
import axios from 'axios';
import { BKURL } from '../constants';

class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state ={username:"",password:"",confirm:"",fname:"",lname:"", mode:"", worksAt:"",position:"",invalidMsg:""}
  }

  handleUsernameChange = (event) => {this.setState({username:event.target.value})} 
  handlePassChange = (e) => {this.setState({password:e.target.value})}
  handleConfirmChange = (e) => {this.setState({confirm:e.target.value})}
  handlefnameChange = (e) => {this.setState({fname:e.target.value})}
  handlelnameChange = (e) => {this.setState({lname:e.target.value})}
  handleModeChange = (e) => {this.setState({mode:e.target.value})}
  handleWorksAtChange = (e) => {this.setState({worksAt:e.target.value})}
  handlePositionChange = (e) => {this.setState({position:e.target.value})}
  handleButtonClick = () => {
    this.setState({invalidMsg:" "})
    let invalid = "";
    invalid += (this.state.username.length<3?("Username must be greater than 3. "):"")
    invalid += (this.state.password.length<8?("Password must be greater than 8. "):"")
    invalid += (this.state.confirm!==this.state.password?("Password is not same. "):"")
    invalid += (this.state.fname.length<2?("First name is requried. "):"")
    invalid += (this.state.lname.length<2?("Last name is requried. "):"")
    invalid += (this.state.mode===""?("Mode can't be none. "):"")
    invalid += (this.state.worksAt===""?("Works At can't be none. "):"")
    invalid += (this.state.position===""?("Position can't be none. "):"")
    this.setState({invalidMsg:invalid})
    if(invalid===""){
      let payload = {
        username:this.state.username, password:this.state.password,
        fname:this.state.fname, lname:this.state.lname,
        mode:this.state.mode, worksAt:this.state.worksAt,
        position: this.state.position
      }
      axios.post(BKURL+"signup", payload)
      .then((res)=>{this.setState({status:res.data.status})})
      .catch((err)=>console.log(err))
    }

  }



  render(){
    return(
      <div className="form-group">
        {this.state.status==="ok"?(<p className="text-success">Signup Successfull now please login</p>):("")}
        {this.state.status==="bad"?(<p className= "text-danger">Username already exist</p>):("")}
        {this.state.invalidMsg!==""?(<p className=  "text-danger">{this.state.invalidMsg}</p>):(null)}
        Username:
        <input type="text" className="form-control" name="username" value= {this.state.username} onChange={this.handleUsernameChange}/>
        Password:
        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handlePassChange} />
        Confirm Password:
        <input type="password" className="form-control" name="confirm" value={this.state.confirm} onChange={this.handleConfirmChange} />
        First Name:
        <input type="text" className="form-control" name="fname" value={this.state.fname} onChange={this.handlefnameChange}/>
        Last Name:
        <input type="text" className="form-control" name="lname" value={this.state.lname} onChange={this.handlelnameChange}/>
        Mode:
        <select name="mode" className="form-control" defaultValue="none" onChange={this.handleModeChange}>
          <option value ="none" disabled={true}>None</option>
          <option value="normal">Normal</option>
          <option value="ghost">Ghost</option>
        </select>
        Works At:
        <select name="worksAt" className="form-control" defaultValue="none" onChange={this.handleWorksAtChange}>
          <option value ="none" disabled={true}>None</option>
          <option value="Bestpeers">Bestpeers</option>
          <option value="Stark Industries">Stark Industries</option>
        </select>
        Position:
        <select name="position" className="form-control" defaultValue="none" onChange={this.handlePositionChange}>
          <option value ="none" disabled={true}>None</option>
          <option value="Software Trainee">Software Trainee</option>
          <option value="Software developer">Software Developer</option>
        </select>
        <input type="submit" className="btn btn-success form-control" onClick={this.handleButtonClick} value="Signup"/>
      </div>
    )
  }
}

export default Signup;