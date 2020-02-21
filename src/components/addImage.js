import React from 'react';

class AddImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  handleOnChange = (e) =>{
    this.setState({file:e.target.value})
  }

  handleOnClick = ()=>{
    console.log(this.state)
  }
  render(){
    return(
      <form className="form-control">
        {this.state.file?(<h1>Uploaded</h1>):("")}
        <input type="file" className="form-control" name="image" onChange={this.handleOnChange}/>
        <input type="button" value = "Submit" className="form-control btn btn-success" onClick={this.handleOnClick}/>
      </form>
    )
  }
}

export default AddImage;