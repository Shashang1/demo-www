import React from 'react';
import './App.css';
import Login from './containers/Login'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Dashboard from './containers/Dashboard';
import Loading from './components/loading'
import Header from './components/header'
import History from "./containers/History"
import CookieMsg from './components/cookieMsg';
import Search from './components/search';
import UserInfo from './components/userInfo'
import Seen from './components/Seen';
import Signup from './components/signup';
import AddImage from './components/AddImage'; 
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
          {props.isLogin?(<Redirect to="/dashboard"/>):("")}
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
