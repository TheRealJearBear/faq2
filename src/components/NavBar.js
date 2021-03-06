import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div>
      <div className="navbar">
        <Link to='/'> HOME </Link>
        <Link to='/launchers'> LAUNCHERS </Link>

      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;
