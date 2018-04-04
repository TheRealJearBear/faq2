import React from 'react';
import { Link } from 'react-router';

const LauncherTile = props => {
  return(
    <div className="launcher">
      <Link to={`/launchers/${props.id}`}><h1>{props.name}</h1></Link>
    </div>
  )
}

export default LauncherTile;
