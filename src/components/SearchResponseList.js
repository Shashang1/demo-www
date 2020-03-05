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
    <Link to={`user/${props.item.userId}`}>
      <Card className={classes.card }  id={props.index+"-button"}>
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