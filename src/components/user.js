import React from 'react';
import defaultImg from '../default.jpg'
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  card:{
    width:'80%'
  },
  media:{
    width:'100%',
    height:'600px',// eslint-disable-next-line
    ['@media (max-width:900px)']:{
      height:'300px'
    }
  }
}))
  
const User = (props) =>{
  const classes = useStyles()
  return(
    <center>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
          className= {classes.media}
          image= {props.userdata.image||defaultImg}
          title= {props.userdata.username}
          />
          <CardContent>
            <Typography variant="h5" component="h2" id={props.userdata.username+"-username"}>
              {props.userdata.username}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h3">
              {props.userdata.fname+" "+props.userdata.lname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2" id={props.userdata.fname+"-position"}>
              {props.userdata.position+" at "+props.userdata.worksAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </center>









    // <div className="card">
    //   <img src={props.userdata.image||defaultImg} alt="User-pic" className="card-img-top"/>
    //   <div className="card-body">
    //     <h4 className="card-title">{props.userdata.fname +" "+props.userdata.lname}</h4>
    //     <p>{props.userdata.position} at {props.userdata.worksAt}</p>
    //   </div>
    // </div>
  )
}

export default User;
