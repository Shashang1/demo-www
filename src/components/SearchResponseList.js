import React from 'react';
import defaultImg from '../default.jpg'
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
  card:{
    width:'32.5%',
    float:"left",
    margin:theme.spacing(0.5),
    textAlign:"center",
    // eslint-disable-next-line
    ['@media (max-width:1020px)']:{
      width: '48%'
    },
    // eslint-disable-next-line
    ['@media (max-width:600px)']:{
      width: '100%'
    }
  },
  media:{
    height:"400px",
    // eslint-disable-next-line
    ['@media (max-width:1020px)']:{
      height:"200px"
    }
  }
}))

const SearchResponseList = (props) => {
  const classes = useStyles()  

  return (  
    // <div className="media border p-2">
    //   <img src={props.item.image||defaultImg} alt="userImg" width="10%" className="border"/>
    //   <div className="media-body p-2 m-1">
    //     <h5><Link to={`user/${props.item.userId}`} >{ props.item.username}</Link></h5>
    //     <p>Name: {props.item.fname} {props.item.lname}</p>
    //     {props.item.position} at {props.item.worksAt}
    //   </div>
    // </div>
    <Link to={`user/${props.item.userId}`}>
      <Card className={classes.card }>
        <CardActionArea>
          <CardMedia
          className= {classes.media}
          image= {props.item.image||defaultImg}
          title= {props.item.username}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.item.username}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h3">
              {props.item.fname+" "+props.item.lname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              {props.item.position+" at "+props.item.worksAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  
  )
}

export default SearchResponseList;