import React from 'react';
import axios from 'axios';
import { BKURL } from '../constants';
import { TextField, withStyles, Select, MenuItem, InputLabel,FormControl, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = theme=>({
  input:{
    width:'80%',
    marginTop:theme.spacing(2)
  },
  form:{
    marginTop:theme.spacing(6),
    padding:theme.spacing(2),
    border:"1px solid #0275d8"
  },
  heading:{
    color:"#0275d8"
  }
})

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
      .then((res)=>{this.setState({status:res.data.status, errMsg:res.data.msg})})
      .catch((err)=>console.log(err))
    }

  }



  render(){
    return(
      <div className={this.props.classes.form}>
        <center>
        <h2 className={this.props.classes.heading}>Registration Form:</h2>
        {this.state.status==="ok"?(<p className="text-success">Signup Successfull now please login</p>):("")}
        {this.state.status==="bad"?(<p className= "text-danger">{this.state.errMsg}</p>):("")}
        {this.state.invalidMsg!==""?(<p className=  "text-danger">{this.state.invalidMsg}</p>):(null)}
        
        <TextField label= "Username" onChange={this.handleUsernameChange} value={this.state.username} className={this.props.classes.input} autoFocus={true}/>
        <TextField label= "Password" onChange={this.handlePassChange} value={this.state.password} className={this.props.classes.input} type="password" />
        <TextField label= "Confirm" onChange={this.handleConfirmChange} value={this.state.confirm} className={this.props.classes.input} type="password" />
        <TextField label= "First Name" onChange={this.handlefnameChange} value={this.state.fname} className={this.props.classes.input} />
        <TextField label= "Last Name" onChange={this.handlelnameChange} value={this.state.lname} className={this.props.classes.input} />
        
        <FormControl className={this.props.classes.input}>
        <InputLabel id="mode-requried">Mode</InputLabel>
        <Select labelId= "mode-requried" id= "mode" value={this.state.mode} onChange={this.handleModeChange}>
          <MenuItem value= "normal">Normal</MenuItem>
          <MenuItem value= "ghost">Ghost</MenuItem>
        </Select>
        </FormControl>

        <FormControl className={this.props.classes.input}>
        <InputLabel id="worksat">Works At</InputLabel>
        <Select labelId= "worksat" value={this.state.worksAt} onChange={this.handleWorksAtChange}>
          <MenuItem value= "Bestpeers">Bestpeers</MenuItem>
          <MenuItem value= "Stark Industries">Stark Industries</MenuItem>
        </Select>
        </FormControl>

        <FormControl className={this.props.classes.input}>
        <InputLabel id="position">Position</InputLabel>
        <Select labelId= "position" value={this.state.position} onChange={this.handlePositionChange}>
          <MenuItem value= "Software Trainee">Software Trainee</MenuItem>
          <MenuItem value= "Software developer">Software Developer</MenuItem>
        </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={this.handleButtonClick} className={this.props.classes.input}>Signup</Button>

        <p className ={this.props.classes.input}>
          If you already have an account.
        </p>
        <Link to="/">Login</Link>
        </center>
      </div>
    )
  }
}

export default withStyles(useStyles)(Signup);