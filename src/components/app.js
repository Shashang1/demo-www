import React from 'react';
import '../App.css';
import Login from '../containers/login'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Dashboard from '../containers/dashboard';
import Loading from './loading'
import Header from './header'
import History from "../containers/history"
import CookieMsg from './cookieMsg';
import Search from './search';
import UserInfo from './userInfo'
import Seen from './seen';
import Signup from './signup';
import AddImage from './addImage'; 
import { Container } from '@material-ui/core';

function App(props) {
  if(props.isLoading){
    return (<Loading />)
  }

  return (
    <Container maxWidth="lg">
      <Router>
        <Header isLogin={props.isLogin} userData={props.userData}/>
        <CookieMsg />
        <Route path= "/" exact>
          {props.isLogin && <Redirect to="/dashboard"/>}
          <Login status={props.status}/>
        </Route>
        <Route path= "/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path= "/history" exact>
          <History />
        </Route>
        <Route path= "/search" exact>
          <Search />
        </Route>
        <Route path="/upload" exact>
          {props.isLogin?(<AddImage />):(<Redirect to="/"/>)}
        </Route>
        <Route path= {`/user/:id`} component={UserInfo}/>
        <Route path= "/seen" >
          {props.isLogin?(<Seen />):(<Redirect to="/"/>)}
        </Route>
        <Route path= "/signup" >
          {props.isLogin?(<Redirect to="/dashboard"/>):(<Signup />)}  
        </Route>
      </Router>
    </Container>
  )
}

const mapStateToProps = (state)=>{
  return ({isLoading:state.isLoading, isLogin:state.isLogin, status:state.invalid, userData:state.userData})
} 
  


export default connect(mapStateToProps)(App);
