import React from 'react';
import axios from 'axios'
import { BKURL } from '../constants';
import { connect } from 'react-redux';

class AddImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  handleOnChange = (e) =>{
    this.setState({file:e.target.files[0]})
  }

  handleOnClick = ()=>{
    const data = new FormData();
    data.append('file', this.state.file);
    axios.post(BKURL+"signup/addImage", data,
    {headers:{'Authorization':'Bearer '+this.props.token}})
    .then(res=>{this.setState({upload:res.data.Uploaded})})
  }
  render(){
    return(
      <div>
        {this.state.upload?(<h1>Uploaded</h1>):("")}
        <input className="m-2 p-2" type="file" name="image" onChange={this.handleOnChange}/>
        <input type="button" value = "Submit" className="form-control btn btn-success" onClick={this.handleOnClick}/>
      </div>
    )
  }
}

const mapStoretoProps = state => {
  return {token: state.userData.token}
}

export default connect(mapStoretoProps)(AddImage);