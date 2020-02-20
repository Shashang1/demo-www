import React from 'react';
import Logout from '../containers/Logout';
import { Link } from 'react-router-dom';

const Header = (props)=> {
  return (
    <div >
      {props.isLogin?(
      <nav className= "navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className= "navbar-nav">
          <li className= "nav-item">
            <Link className= 'nav-link' to="/dashboard">Dashboard</Link>
          </li>
          <li className= "nav-item">
            <Link className= 'nav-link' to="/history">History</Link>
          </li>
          <li className= "nav-item">
            <Link className= 'nav-link' to="/search">Search</Link>
          </li>
          <li className= "nav-item">
            <Link className= 'nav-link' to="/upload">Upload picture</Link>
          </li>
          <li className= "nav-item logout">
            <Logout />
          </li>
        </ul>
      </nav>
      ):("")}
    </div>
  )
}

export default Header;